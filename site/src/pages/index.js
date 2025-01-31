/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import Layout from "gatsby-theme-theme-ui-example/src/components/Layout/Layout"
import { Nav } from "gatsby-theme-theme-ui-example/src/components/Nav/Nav"
import { HomeMain } from "../components/HomeMain"
import { HomeMainTest } from "../components/HomeMainTest"
import { CustomFooter } from "gatsby-theme-theme-ui-example/src/components/CustomFooter/CustomFooter"
import { NewsFooter } from "gatsby-theme-theme-ui-example/src/components/CustomFooter/NewsFooter"
import { testNavData } from "../../navData"
import { footerLinkData } from "../../footerLinkData"
import altoonaLogo from "../../assets/logo.png"
import beaverStadium from "../../assets/beaver-stadium-fireworks_0.jpeg"
import markLogo from "../../assets/newfootermap2.png"
import { graphql } from "gatsby"

// export const query = graphql`
//   {
//     quickLinks: allContentfulQuickLinksCards {
//       edges {
//         node {
//           id
//           slug
//           cardImage {
//             id
//             file {
//               url
//               fileName
//             }
//           }
//           cardTitle
//           cardDescription {
//             raw
//           }
//         }
//       }
//     }
//     hero: allContentfulLandingPageImageHero {
//       edges {
//         node {
//           id
//           heading
//           image {
//             id
//             file {
//               fileName
//               url
//             }
//           }
//           LandingPageHeroImageText
//           subtitle
//         }
//       }
//     }
//   }
// `

export default ({ data }) => (
  <Layout
    navChild={<Nav imageSrc={altoonaLogo} navData={testNavData} />}
    mainChild={<HomeMainTest data={data} imageSrc={beaverStadium} />}
    footerChild={<NewsFooter />}
  ></Layout>
)
