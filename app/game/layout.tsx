import LoadGameButton from "@/components/gameLoading/load-game-button";
import DownloadGameButton from "@/components/gameLoading/download-game-button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import SaveGameButton from "@/components/gameLoading/save-game-button";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <nav className="flex justify-between items-center gap-8 py-4 px-12">
        <h1 className="text-xl font-bold">Motocross Manager</h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-4">
          <LoadGameButton />
          <SaveGameButton />
          <DownloadGameButton />
        </div>
      </nav>
      {children}
    </div>
  );
}
