import { Box } from '@chakra-ui/react'
import SideBar from './SideBar.tsx'

export const PageLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box
        position="absolute"
        left="0"
        top="0"
        width="250px"
        height="calc(100vh - 100px)"
      >
        <SideBar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box position="absolute" bottom="0" left="0" height="100px"></Box>
    </Box>
  )
}
