import { Box, Drawer, DrawerOverlay, useBreakpointValue, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContex";

import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })


  console.log(isDrawerSidebar);

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">

            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>

          </DrawerContent>
        </DrawerOverlay>
      </Drawer >
    )
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box >
  )
}