import { Col, Row, } from "react-bootstrap";


const PDF_FILE_URL = 'http://localhost:3000/Prateek_Mohapatra_CV.pdf'

export const Newsletter = () => {

  const DownloadFileAtURL = (url) => {

    fetch(url).then(response => response.blob()).then(blob => {
      const blobURL = window.URL.createObjectURL(new Blob([blob]))
      const fileName = url.split("/").pop()
      const aTag = document.createElement("a")
      aTag.href = blobURL
      aTag.setAttribute("download", fileName)
      document.body.appendChild(aTag)
      aTag.click()
      aTag.remove()
    })   
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row className="align-items-center">
          <Col lg={12} md={6} xl={5}>
            <h3>Feel Free To DownLoad My Resume To Know More About My Skills</h3>
          </Col> 
          <Col md={6} xl={7}>
            <button className="download-btn" onClick={() => { DownloadFileAtURL(PDF_FILE_URL) }}>Download CV</button>
          </Col>
        </Row>
      </div>
    </Col>
  )
}