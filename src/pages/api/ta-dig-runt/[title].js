import { taDigRunt } from '../../../../databcn'

export default function handler({ query: { title } }, res) {
  const filtered = taDigRunt.filter((artikel) => artikel.title === title)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: 'Artikel finns inte' })
  }
}
