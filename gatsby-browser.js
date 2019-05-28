const React = require("react")
require("typeface-rubik")
require("prismjs/themes/prism-twilight.css")
const Layout = require("./src/components/layout").default
const Theme = require("./src/components/theme").default

exports.wrapPageElement = ({ element, props }) => {
  return (
    <Theme>
      <Layout {...props}>{element}</Layout>
    </Theme>
  )
}
