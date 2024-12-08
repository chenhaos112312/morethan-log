import styled from "@emotion/styled"
import Link from "next/link"
import { randamAccessUrls} from "src/custom"


const NavBar: React.FC = () => {
  const links = [{ id: 1, name: "About", to: "/about" }]
  {/* 生成min~max之间的随机数：const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min; */}
  return (
    <StyledWrapper className="">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <a onClick={()=>{let accIndex =  Math.floor(Math.random() * (randamAccessUrls.length - 0 + 1)) + 0;window.location.href = randamAccessUrls[accIndex]}} >RandamAccess</a>
    </StyledWrapper>
  )
}

export default NavBar

const StyledWrapper = styled.div`
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: row;
    li {
      display: block;
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.gray11};
    }
  }
  a{   
    margin-left: 1rem;
  }
`
