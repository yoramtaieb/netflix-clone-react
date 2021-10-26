import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }
    nav {
        box-shadow: ${({ theme }) => theme.box_shadow};
        .title {
          .logo {
            color:  ${({ theme }) => theme.text};
          }
        }
        .nav_burger {
            span {
              background: ${({ theme }) => theme.text};
            }
          }
          .overlay {
            background: ${({ theme }) => theme.body};
        }
        .nav_links_desktop {
          .little_menu {
            p {
              color:  ${({ theme }) => theme.link_desktop};
            }
          }
            .link {
              color: ${({ theme }) => theme.text};
            }
            .active {
              color: ${({ theme }) => theme.body};
            }
        }
    }
`;
