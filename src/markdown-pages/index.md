---
path: "/"
---

import { Button, Image } from "rebass"
import Pic from "../images/pic.jpg"
import { Link } from "gatsby"

<div style="text-align:center;">

## Hi, I'm Andrii, a software engineer

My best achievements are yet to come and it keeps me going.

<Image
src={Pic}
sx={{
    width: [ '100%', '70%' ],
    borderRadius: 8,
  }}
/>

---

Check out my <Link className="action-link" to="/blog">blog</Link>, <Link className="action-link" to="https://algoholic.dev">book</Link> and <Link className="action-link" to="/cv">resume</Link>.

</div>
