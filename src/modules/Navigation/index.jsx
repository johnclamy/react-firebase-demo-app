import React from 'react'
import { Link } from 'react-router-dom'

import SignOutButton from '../SignOutButton/index'
import * as routes from '../../constants/routes'
import './index.css'

const Navigation = ({ authUser }) =>
  <div>
    { authUser ? <NavigationAuth /> : <NavigationNonAuth /> }
  </div>

const NavigationAuth = () =>
  <nav className='app-navbar'>
    <ul className='app-nav-list'>
      <li className='app-nav-list-item'><SignOutButton /></li>
      <li className='app-nav-list-item'>
        <Link to={routes.LANDING}>
          <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGgSURBVFhH7Ze9SgNREEZjSII/qFhKClEbDYqiCBaWdhZWNjbprBRs1LyBPkHAB7DxFSy1UxACgo2FVawsBRF2PbMZ3UBu9l6DIxb54DCzM7N3voRlSXJ9fSmKojIcwYkxB3Ecl3RtKhrH8EbzzgrOvyfGxHVdm4p6jUZDL03EjnExgDa0lIritwHyAvm85MQpruXGAfIFqfUqPUeUbYBYgVvN61CFSXhkLi/1XsS9YQasxA6vAfmEM1Zw/hJR1GmA5r42zcWuzmeJep7GNNHp/rdgR1lX/jPh7BBuNF+EF3jNoAmzOt9oq3djTJE8+0VE3OJatOOCfpUoSh4mnXfOtlGE4PdAYiBpOESr+0EZYt7GAPMXcOVhhHkbA8QanHkYBBsDoWLexgDzp3DuYYh5MwN18ksPw2BjIFTMm30Du+R7HkpgZuAanjyMMm9jIFTM/8wA2nRBf5soSg6SCM7ZNgoQbGANPlqzbtF/J8zp/HOrmilZHmbASuzwGnggTljB+fILW9RpgKb8Y/krLevaVBSLmFghrlrCjoqu7Avlcp+suSetO/A66QAAAABJRU5ErkJggg==' alt='landing page link' />
        </Link>
      </li>
      <li className='app-nav-list-item'>
        <Link to={routes.SHOPPING}>
          <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAI0SURBVFhHxZbPSxRxGIc3rNYSXFAKIoIC/QO87i6ySH9AhS2E0km8dioRJJAMvRS4ixgRStTZfhyiEin0qIcST0F62oMXxdZtLd2t510+yoKH+ensAw/fed+Z931nx5lxYg2nWq0O4Gecr/MDTmOXDjs5GFL8B6xLLBMm20/wE+5jSoeeDAx4gParO5U6gtxrXFIYPQxP6epcVCpamH2a4buYVSp6GP4RpxRGD8OHcU1h9DA8iUbD7oOzDC/hCxwK0Wsa4QwH24tqm5NZCSp9vrPak9Wn9s5w8AiGch/QJ4t2RVuVcoYTTlNgXFDKN/Sw1/wrhe7gBOw++I29SvmC+st4QL+MUu6hcAFzCn1BvT3S65zAKaXcQ+FDXFXoGRtK/Q/ro5Q3KOxGo10pT+g+qrBeVcobFDbToIw3lfIEdfYeWVDoDxp8wUmFrqGmBX9hv1L+oMEoflPoGmru4g5X8bxS/qBBhkYVbFPKFRxvV+65Qv/Q5Bzu4VNOZtCNHHsPjaTaBINGi1jEnx58r/Lg0OwRv2xFYfRwAj1or9OEUtHC8DjanyDYIxUEho/jJt7HLFfjtpMcd0XlwaHhGRq+ZbUPi7+HK27VWVL+j9Y3Kg8HGm7gY22PYaG2QxC/ZO5XbMbrxEaHdgeHZvZVc8u2GXCD7TJrU20nENuHR962ySfQSNd2hgHNZ7CAOa2z2lWDuB/tpfUMl9H+Fce1OzjWDO0D453WY83J3cE5zOMlpeuIxf4DVtxN+HTweQQAAAAASUVORK5CYII=' alt='shopping cart link' />
        </Link>
      </li>
      <li className='app-nav-list-item'>
        <Link to={routes.ACCOUNT}>
          <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIdSURBVFhH7ZY9S1thGIYjFOO31o+lgiVQFwWX0vo9F3RwVGwXJ6EUFKwiiPgHClK0XQR/gg4qzqJgsYOULg4qSAYRTVUEq4hJr0duA5LklHje01LsBRfJe79PnudNjDkn9E8Tj8eLE4lEnpZ/BoY+w1mMMfwGnm/jBJaoLBgY0I3nuIZ92Mj8Nh6HcQ93sU7lbqFxO14ycFTRHcgL2J/HKM8rFbuBhjk0/o4zitKiQ2zhR0VuoOELNJ4qygg19qex78cjRf6hYT/uaOkJdRGG2xezVpF/6DdKw3UtPaG2VAdoVeQfHWBVS09uDwBtivxDswd+AIa/wy0tPaGu2qbzWK/IPzR7hfYjVKooI9R1Wi0WKvIPg3NpeIjDijJCzTLOaekOmtpvgV0HWhSlwN4QXqC7j/8WPgX7Of6EP7FJcRKyAbzCHkXu0SFOsVdRErLPuKRlcHCIE48DLGoZHH/tADQP4xheY4PiJGSDGMMuRW6gYRWO474GvNbWHfSvOol2wG9ol+WwtrOHhmU0+ID2rbfbrff423s+auyecQrP0A79ll7Z3RvwArvPO0Ab/CbrBqA3YJ+cHeQrPtGWNxR2oL3rGcxXfG/oUY1fMIoRxemhoByPcVqRE/g08ui5gSuK0kPBCB7xgiJFzqBvM33tKvlSUSps2oVkgbrHrqVvBf7AEY1Lhc1NigOFGZMalwqbddQ8D9gajfsPhEK/ANcGTi6KT96QAAAAAElFTkSuQmCC' alt='account page link' />
        </Link>
      </li>
    </ul>
  </nav>

const NavigationNonAuth = () =>
  <nav className='app-navbar'>
    <ul className='app-nav-list'>
      <li className='app-nav-list-item'>
        <Link to={routes.SIGN_IN}>
          <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMdSURBVFhH1ZfNSxVRGMbVSuRWZJTQh1pBf4CtjBZBGgRS1KJdgkGbPiDSIIJWLioiCINw0cZNSFqLMlpEIEWkZUUIRdQugr6MsoUYZvf2e8b3Og73zNwzNyN64Mfc9znPOfPeOzPHsey/VjabbYdmK/+eOMlmuApbzApE/QDOWhmI+hhczOVy9WaVLhaqg9sg3YI6GwpE7WqgCUZhCs7TSJUNpROTdzF5nOMjjg1mR8RYQQMS+XL8vfARXsJGG/ITC+xn0jSc5vNCswvEuLOBvJi7kvE7oEY2mZ0sgi3wEw6bFSsyiQ1INFFJpg/URK3ZbhHYwAT97OfMShS5og1I1sRDGEn6RbXgDRgmtMCsRJH1akAitxq+w1GzomJgG0xzcucN5xJ57wYkssfhGyw1KxTmdbhppZfIp2qAL1dFfgwOmjUjBpZj6rltMctL5FM1IJG/AI+tnBHGTvihDs3yEnNKaaAZ9IiHl0GLwJCV3mJOKQ0sBj3mTWYFZg9csdJbzEndgMScD9BmZWAMQJeVTjFecOfiFTTAZcxApZVOMecFdFgZGNfgspVOMX4f+lh8diOhjjTA2CrqV9BpllOMv4F2KwOjCwasdIrFG8h84difb4J6toE5J3/C52p5cSIzAeElYMJJjFErY0Uu0gSfgwb4nObkNWRyHBvNCky9cEhrzIoVc9XEGMd+jsOgG9jr5BK5VnLjsMisYNEKBt5DdIeKEfl8E4F8Ty6R1f3Wa2UozEvwnIUqzEoUuaAJ0MmXmZ0osnrDmiS/x6xQDKwF3RytZhUVWV1P792TfA/5p1BuVlQEzsBbLWzWvIk1t8IviH+LprMMAV2Ge5C4maQRa66Dz9BtVrwI1SpMA3rUSnujnSPWWM96ejEd9P5SBHWDvYMRKPpoxom5+tn1zQdhhdl+ogltLkOg16hT1BkbKiqy9czR/qBr3k0dPvNpxETtdodAe8QnLQY7XM3g18A+0HM+Cc9gfv5t44RLWOwI3IUpam0+X0F/1V7DhHl63+uF3ZTuR+1PxcLVsJ2THIAT0AFt0Ihf2k/971RW9htWCM3OekV/MgAAAABJRU5ErkJggg==' alt='signIn link' />
        </Link>
      </li>
      <li className='app-nav-list-item'>
        <Link to={routes.LANDING}>
          <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGgSURBVFhH7Ze9SgNREEZjSII/qFhKClEbDYqiCBaWdhZWNjbprBRs1LyBPkHAB7DxFSy1UxACgo2FVawsBRF2PbMZ3UBu9l6DIxb54DCzM7N3voRlSXJ9fSmKojIcwYkxB3Ecl3RtKhrH8EbzzgrOvyfGxHVdm4p6jUZDL03EjnExgDa0lIritwHyAvm85MQpruXGAfIFqfUqPUeUbYBYgVvN61CFSXhkLi/1XsS9YQasxA6vAfmEM1Zw/hJR1GmA5r42zcWuzmeJep7GNNHp/rdgR1lX/jPh7BBuNF+EF3jNoAmzOt9oq3djTJE8+0VE3OJatOOCfpUoSh4mnXfOtlGE4PdAYiBpOESr+0EZYt7GAPMXcOVhhHkbA8QanHkYBBsDoWLexgDzp3DuYYh5MwN18ksPw2BjIFTMm30Du+R7HkpgZuAanjyMMm9jIFTM/8wA2nRBf5soSg6SCM7ZNgoQbGANPlqzbtF/J8zp/HOrmilZHmbASuzwGnggTljB+fILW9RpgKb8Y/krLevaVBSLmFghrlrCjoqu7Avlcp+suSetO/A66QAAAABJRU5ErkJggg==' alt='landing page link' />
        </Link>
      </li>
    </ul>
  </nav>

export default Navigation
