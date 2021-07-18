import './Biodata.css'
import MainContentLayout from '../components/MainContentLayout'

function Biodata() {
  return (
    <MainContentLayout title="Biodata">
      <div>
        <p className="biodata-key">Nickname :</p>
        <p className="biodata-value">Zydhan</p>
        <p className="biodata-key">Languages :</p>
        <p className="biodata-value">PHP, JavaScript, C/C++, SQL</p>
        <p className="biodata-key">Platforms :</p>
        <p className="biodata-value">Windows, Linux, and Android</p>
        <p className="biodata-key">Technologies :</p>
        <p className="biodata-value">Laravel, React, and Express</p>
        <p className="biodata-key">Email :</p>
        <p className="biodata-value">
          <a href="mailto:zydhanlinnar11@gmail.com">zydhanlinnar11@gmail.com</a>{' '}
          /{' '}
          <a href="mailto:zydhan.19051@mhs.its.ac.id">
            zydhan.19051@mhs.its.ac.id
          </a>
        </p>
        <p className="biodata-key">LinkedIn :</p>
        <p className="biodata-value">
          <a href="https://www.linkedin.com/in/zydhanlinnar11">
            zydhanlinnar11
          </a>
        </p>
      </div>
    </MainContentLayout>
  )
}

export default Biodata
