import React from 'react'

import { auth } from '../../firebase/index'
import './index.css'

const SignOutButton = () =>
  <input type='image' onClick={auth.signOutUser}
    style={{cursor: 'pointer'}}
    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALASURBVFhH1ZdNSBVRGIavdf2NzEhJKkuivbYSN4EYLSqsRbsicREJQWARbdq0MIxoYcGFVroIi2oTl1aiIpT9FwYmuhWsVMoWZmjd2/PlC2bjXM/8QPTCw8x5z3e+852ZOzPnJv4rZbPZzZlM5jBc4bybY5rjPY6dcBHqaa9TeHwicQM8gAX4Do/hNtjEtyANw2CahJuwXcPDi9XsJtFD+KnjQShUt0f0bYPT8Ba+QTtsUHcwMfAQBcxyHIK9sp1kt4Exx2EC3kCVutzEgBb4QaIOWC87sBhbTp5B+Ag1snOLwCabHM7IiiSKyCfXHZjgvFL26iJoB3yBq7JiEROXkPOZwXlStlcEPILnBIW+7H4iry3uK7TKWik66sHkdq9CiNyX4AN4nwxWbS+UtJpOIr4U+hlbKyundCs+gff3hdlAQLWaTiI+T4XPuBZBbAp61YwuJk4GKYK4A7BA7CZZ0fVHEdNrFUF/CWSJbZQVj8jpXAQxn+GUmr+N89AbAwNgmoatSu8Rfe/hgppL94Wq7bUblW6wy/sSipXeI/rGoU3NeMS8lSQdtck5z/kDI2YOmtWMroCTVxBjV6lOVjT9NXmZbF8Rd4K4WciXtSQ62iDQo0F8MThPbiL2PvSouSzMGzBMojxZa4rYAsZcDjB5FcwTf1TWsjB30ml7vmOyYhe5u5jnFay+SAKugX2ttsiKTeTcB7a39L/NVFZEwAj0cV4gO7LItwumICXLXwTtUfBd8N0Bu4qFVJPHFmWfbbdFEVjLANtIPoHQ+3vG2mW3xfRDsNvKANtCvaAY25rbt8L5ajDGftBdYPc8RXvlM+8qBiZJcBZsozoD1/H2c/RsqfAqwP4L2HM+D68hnk8uiTZCKzwF27Ivgv0FewdjMEdh9nq1QnvgCE3n90kgkdyKaYSTcE40Qx2ThrvU/06JxC/vjdCGsa5fTAAAAABJRU5ErkJggg==' alt='sign out button' />

export default SignOutButton
