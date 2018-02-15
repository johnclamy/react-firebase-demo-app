import React from 'react'
import { Link } from 'react-router-dom'

import * as routes from '../../constants/routes'
import './index.css'

const Header = () =>
  <header className='app-header'>
    <section>
      <Link to={routes.LANDING}>
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQASURBVHhe7ZldTJtlGIaJBzvw0HMP5G/SlrKCqEBZWzcGtEX8YTMSpsDoYJGYJSPDZGaNsFFttiUkGn8SLWYLI5jMCAb3W8oOPPWAzXjgaUkPzaQHHHjfvu/2uDCzQtut5Wv7Xcmdfu/z3M/9ts3bL1/SMhMTExMTExMTE5NHsRzkrheOIVw+gnj5MXJLKY/yhvSMjBc+VcMIVQ+TmUjPyHjhYxnCmiVAWgNollJKrEfQor2WAOJSKnxqj2Ctdoi0H6VTSluivVqyLHwcgwg5BslMJeOFj76hNQ5gqrEf8cYBMl3JeOnR9D6pJcvSw/keqSXL0sPdRxpNrj7E3X0IHczH88n+XtKo2tebh+eTjndJLVkags5etDx4X3l4PvG9Q2rJ0jDk7X11HyLzJdkyLbKZyYq3e8h8SbZMi2xmiopDb5FasiwtenrwXO+bZO8b/EtKueNwN5kLSXxWHO7Gifs5r+OmlHLHYBeZC0l8xgz4MTDox4bO6PfBK+Xi56ifzwZ8iAT8pNaQD2ekVfyM+GAb9uLOiI8c8SI57GW/tHLPaCf5JJKYrBltZ/9oB5I664MOrH6ovgxp5Yfj7eSTSGIyRh/54wcQeZilrnVN2sXNiTbYxtpwd+wAqa6TY215PPI7zbj6sCf3ITm+n1Svqyc9sEprZzj1GpmOxJ41QXW8T3kQeZiprnVN2jtH0EOmI7FnRdAFW9CD33XOaTeSQVcJHfkJ9WEnXUhOusiJvVid2Okjnw+CZXzmrBOWs62YndpLPpA68g0GvMsHLdwVbkE47EQ87CSfvpAMtxr4yJ9vRuhCM/l0hX8uNOHP80348lwrnpetjMn0q1ibbiKnm7b/L7Eo+eIVUkuWpcfXL5Nasiw9vn2J1JJl6fB9PfyResZm6kmtSD2WZvagU9ppE2mgO+JAdMaBpMpY19ffOdAlbWNyyYGPLzqASw5ys3Tt4h6cFtu2qJzx/2f8J5UzKTZjMVcHz1wdOduAjTPfMPbRbSS0pr5iTNcu1wFzdrSLPSWzdfBpb6ocvcdlO/xiNw7ztYj+YFd3/s+xfG6Z3Cxd0715O5bEnhLli22bo/YSu3G4YsX6jzb1m7+GROSGet2sq0joXibaKueKDfdkW+PwkwXrC1Zy8WckFpbIR7SoaqqXibbOMeAXsFSD6C815MpnWP51gdyslU8Z0z3lWRR7StLMMd5P4NpudF3fTd6owcZvU4z9MY+Elr7WNdXH1RfRJvaUXK+CV3tT5eg9lMcndmMRrcZktJp8vDAutm3R3sdnkLeq8InYjMntSvhXKhGNVeDeSgX+jlXi5nIF3dJOGz2jZm/dz1BZOidWXkL/6JiYmJiYmJiYmOSVsrJ/ARn+ke/zT3tSAAAAAElFTkSuQmCC' alt='logo' />
      </Link>
    </section>
    <h1 className='app-header-title'>
      <Link style={{textDecoration: 'none'}} to={routes.LANDING}>
        Smart Cart
      </Link>
    </h1>
  </header>

export default Header
