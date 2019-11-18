import format from "date-fns/format"
import { savePDF } from "@progress/kendo-react-pdf"

class DocService {
  createPdf = (html, type) => {
    savePDF(html, {
      fileName: `cv-andrii-maglovanyi_${type}_${format(
        new Date(),
        "yyyy-MM-dd"
      )}.pdf`,
      margin: { top: 50, left: 30, right: 30, bottom: 50 },
    })
  }
}

const Doc = new DocService()
export default Doc
