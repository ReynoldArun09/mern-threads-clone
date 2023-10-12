import { Button, Flex, Image, Link, useColorMode } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import UserAtom from "../Atom/UserAtom";
import {Link as RouterLink} from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";
import AuthAtom from "../Atom/AuthAtom";
import UseLogout from "../Hooks/UseLogout";


export default function Header() {
  const {colorMode, toggleColorMode} = useColorMode()
  const setAuth = useSetRecoilState(AuthAtom)
  const user = useRecoilValue(UserAtom)

  const logout = () => {}
  const handleLogout = UseLogout()
  return (
    <Flex justifyContent={"space-between"} mt={6} mb={12}>
      {user && (
				<Link as={RouterLink} to='/'>
					<AiFillHome size={24} />
				</Link>
			)}
			{!user && (
				<Link as={RouterLink} to={"/auth"} onClick={() => setAuth("login")}>
					Login
				</Link>
			)}
      <Image
        cursor={"pointer"}
        alt="threads"
        w={6}
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
        onClick={toggleColorMode}
      />
      {user && (
				<Flex alignItems={"center"} gap={4}>
					<Link as={RouterLink} to={`/${user.username}`}>
						<RxAvatar size={24} />
					</Link>
					<Link as={RouterLink} to={`/chat`}>
						<BsFillChatQuoteFill size={20} />
					</Link>
					<Link as={RouterLink} to={`/settings`}>
						<MdOutlineSettings size={20} />
					</Link>
					<Button size={"xs"} onClick={handleLogout}>
						<FiLogOut size={20} />
					</Button>
				</Flex>
			)}

			{!user && (
				<Link as={RouterLink} to={"/auth"} onClick={() => setAuth("register")}>
					Sign up
				</Link>
			)}
    </Flex>
  )
}
