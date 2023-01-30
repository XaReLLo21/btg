import { taDigRunt } from '../../../../ta-dig-runt'

export default function handler(req, res) {
  res.status(200).json(taDigRunt)
}
