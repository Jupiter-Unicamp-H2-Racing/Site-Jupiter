import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.resolve(__dirname, '../../data');

/**
 * Repositório genérico para os arquivos JSON da pasta /data.
 *
 * Toda a leitura (e, no futuro, escrita) dos dados passa por aqui.
 * Isso mantém a lógica de acesso a arquivo em um único lugar, o que
 * facilita reaproveitar este mesmo repositório quando um painel
 * administrativo (com POST/PUT/DELETE) for implementado.
 */
export class JsonRepository {
  /**
   * @param {string} fileName - nome do arquivo dentro de /data, ex: "projetos.json"
   */
  constructor(fileName) {
    this.filePath = path.join(DATA_DIR, fileName);
  }

  async findAll() {
    const raw = await readFile(this.filePath, 'utf-8');
    return JSON.parse(raw);
  }

  async findById(id) {
    const items = await this.findAll();
    return items.find((item) => String(item.id) === String(id)) ?? null;
  }

  /**
   * Reservado para o futuro painel administrativo.
   * Sobrescreve o arquivo inteiro com a nova lista de itens.
   */
  async saveAll(items) {
    await writeFile(this.filePath, JSON.stringify(items, null, 2), 'utf-8');
    return items;
  }
}

export default JsonRepository;
