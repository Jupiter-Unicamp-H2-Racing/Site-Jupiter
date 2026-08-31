// Ordem hierárquica obrigatória para exibição da equipe:
// Capitã > Diretores > Coordenadores > Membros.
const GRUPOS = [
  { chave: 'capita', titulo: 'Capitã', teste: (cargo) => /^capit[ãa]/i.test(cargo) },
  { chave: 'diretores', titulo: 'Diretores', teste: (cargo) => /^diretor/i.test(cargo) },
  { chave: 'coordenadores', titulo: 'Coordenadores', teste: (cargo) => /^coordenador/i.test(cargo) },
  { chave: 'membros', titulo: 'Membros', teste: (cargo) => /^membro/i.test(cargo) },
];

const GRUPO_OUTROS = { chave: 'outros', titulo: 'Outros', teste: () => true };

/**
 * Agrupa e ordena integrantes de acordo com a hierarquia da equipe.
 * Retorna apenas os grupos que possuem ao menos um integrante.
 *
 * @param {Array<{ id: number, nome: string, cargo: string, linkedin?: string }>} integrantes
 */
export function agruparIntegrantes(integrantes = []) {
  const grupos = [...GRUPOS, GRUPO_OUTROS].map((grupo) => ({ ...grupo, itens: [] }));

  for (const integrante of integrantes) {
    const grupo = grupos.find((g) => g.teste(integrante.cargo || ''));
    (grupo ?? grupos[grupos.length - 1]).itens.push(integrante);
  }

  return grupos
    .filter((grupo) => grupo.itens.length > 0)
    .map((grupo) => ({
      chave: grupo.chave,
      titulo: grupo.titulo,
      itens: [...grupo.itens].sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR')),
    }));
}

export default agruparIntegrantes;
