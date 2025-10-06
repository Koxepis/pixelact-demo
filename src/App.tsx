import { useState } from "react";
import { Button } from "@/components/ui/pixelact-ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/pixelact-ui/accordion";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/pixelact-ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/pixelact-ui/alert-dialog";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/pixelact-ui/avatar";
import { Badge } from "@/components/ui/pixelact-ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/pixelact-ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/pixelact-ui/card";
import { Calendar } from "@/components/ui/pixelact-ui/calendar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/pixelact-ui/carousel";
import { Checkbox } from "@/components/ui/pixelact-ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/pixelact-ui/collapsible";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/pixelact-ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/pixelact-ui/hover-card";
import { Input } from "@/components/ui/pixelact-ui/input";
import { Label } from "@/components/ui/pixelact-ui/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/pixelact-ui/menubar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/pixelact-ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/pixelact-ui/select";
import { Textarea } from "@/components/ui/pixelact-ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/pixelact-ui/tooltip";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-normal">
            Pixelact + shadcn/ui Showcase
          </h1>
          <p className="text-white/75">
            React + Vite + Tailwind v4 with Pixelact components
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button onClick={() => setCount((c) => c + 1)}>
              Count is {count}
            </Button>
            <Button variant="link" asChild>
              <a href="https://pixelactui.com" target="_blank" rel="noreferrer">
                Pixelact
              </a>
            </Button>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Typography (font showcase) */}
          <Card>
            <CardHeader>
              <CardTitle>Typography</CardTitle>
              <CardDescription>
                Showcase of App Display and App Sans
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 text-left">
              <div>
                <div className="text-xs uppercase text-muted-foreground mb-2">
                  Display font
                </div>
                <div className="font-display text-3xl">
                  Dead Revolver Display
                </div>
                <p className="font-display text-xl mt-1">
                  The quick brown fox jumps over the lazy dog 0123456789
                </p>
              </div>
              <div>
                <div className="text-xs uppercase text-muted-foreground mb-2">
                  Sans font
                </div>
                <div className="font-sans text-2xl">Dead Revolver Game</div>
                <p className="font-sans text-base mt-1">
                  The quick brown fox jumps over the lazy dog 0123456789
                </p>
              </div>
            </CardContent>
          </Card>
          {/* Buttons (Pixelact variants) */}
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>Pixelact-styled button variants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link" asChild>
                  <a href="#">Pixel Link</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Dialog */}
          <Card>
            <CardHeader>
              <CardTitle>Dialog</CardTitle>
              <CardDescription>Modal dialog with actions</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Example Dialog</DialogTitle>
                    <DialogDescription>
                      Pixelact-styled dialog content.
                    </DialogDescription>
                  </DialogHeader>
                  <p className="text-sm">This is the dialog body.</p>
                  <DialogFooter>
                    <Button variant="secondary">Cancel</Button>
                    <Button>Confirm</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Hover Card */}
          <Card>
            <CardHeader>
              <CardTitle>Hover Card</CardTitle>
              <CardDescription>Content on hover</CardDescription>
            </CardHeader>
            <CardContent>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="secondary">Hover me</Button>
                </HoverCardTrigger>
                <HoverCardContent>
                  <p className="text-sm">Extra details shown on hover.</p>
                </HoverCardContent>
              </HoverCard>
            </CardContent>
          </Card>

          {/* Inputs */}
          <Card>
            <CardHeader>
              <CardTitle>Inputs</CardTitle>
              <CardDescription>Input, Textarea, and Select</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="w-full max-w-sm"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="w-full max-w-sm"
                />
              </div>
              <div>
                <Label htmlFor="flavor">Favorite flavor</Label>
                <Select>
                  <SelectTrigger className="w-full max-w-sm">
                    <SelectValue placeholder="Choose one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vanilla">Vanilla</SelectItem>
                    <SelectItem value="chocolate">Chocolate</SelectItem>
                    <SelectItem value="strawberry">Strawberry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Menubar */}
          <Card>
            <CardHeader>
              <CardTitle>Menubar</CardTitle>
              <CardDescription>App menu</CardDescription>
            </CardHeader>
            <CardContent>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>New Tab</MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                      <MenubarSubTrigger>Share</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Copy Link</MenubarItem>
                        <MenubarItem>Email</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Undo</MenubarItem>
                    <MenubarItem>Redo</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </CardContent>
          </Card>

          {/* Popover & Tooltip */}
          <Card>
            <CardHeader>
              <CardTitle>Popover & Tooltip</CardTitle>
              <CardDescription>Interactive overlays</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-3">
              <Popover>
                <PopoverTrigger asChild>
                  <Button>Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <p className="text-sm">This is popover content.</p>
                </PopoverContent>
              </Popover>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="secondary">Hover for tip</Button>
                  </TooltipTrigger>
                  <TooltipContent>Helpful tip here!</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardContent>
          </Card>

          {/* Accordion */}
          <Card>
            <CardHeader>
              <CardTitle>Accordion</CardTitle>
              <CardDescription>Single collapsible items</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full text-left">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is Pixelact?</AccordionTrigger>
                  <AccordionContent>
                    Pixel-styled components built on shadcn/ui.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it customizable?</AccordionTrigger>
                  <AccordionContent>
                    Yes, using CSS variables and Tailwind.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Alert */}
          <Card>
            <CardHeader>
              <CardTitle>Alert</CardTitle>
              <CardDescription>Inline status message</CardDescription>
            </CardHeader>
            <CardContent>
              <Alert>
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  This is a simple alert example.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Alert Dialog */}
          <Card>
            <CardHeader>
              <CardTitle>Alert Dialog</CardTitle>
              <CardDescription>Confirmation modal</CardDescription>
            </CardHeader>
            <CardContent>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Delete item</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your item.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Confirm</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>

          {/* Avatar & Badge */}
          <Card>
            <CardHeader>
              <CardTitle>Avatar & Badge</CardTitle>
              <CardDescription>User avatar and status badge</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  src="https://i.pravatar.cc/100?img=1"
                  alt="avatar"
                />
                <AvatarFallback>PA</AvatarFallback>
              </Avatar>
              <div className="space-x-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Breadcrumb */}
          <Card>
            <CardHeader>
              <CardTitle>Breadcrumb</CardTitle>
              <CardDescription>Navigation trail</CardDescription>
            </CardHeader>
            <CardContent>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Demo</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </CardContent>
          </Card>

          {/* Calendar */}
          <Card className="overflow-visible">
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
              <CardDescription>Date picker</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={new Date()}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          {/* Carousel */}
          <Card>
            <CardHeader>
              <CardTitle>Carousel</CardTitle>
              <CardDescription>Swipe between items</CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full max-w-sm mx-auto">
                <CarouselContent>
                  {[1, 2, 3].map((n) => (
                    <CarouselItem key={n} className="p-6">
                      <div className="h-24 grid place-items-center rounded-md border">
                        Slide {n}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>

          {/* Checkbox */}
          <Card>
            <CardHeader>
              <CardTitle>Checkbox</CardTitle>
              <CardDescription>Form control</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm leading-none cursor-pointer"
                >
                  Accept terms and conditions
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Collapsible */}
          <Card>
            <CardHeader>
              <CardTitle>Collapsible</CardTitle>
              <CardDescription>Show/hide content</CardDescription>
            </CardHeader>
            <CardContent>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="secondary">Toggle content</Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-3">
                  <p className="text-sm text-muted-foreground">
                    Hidden content revealed!
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Card (structure) */}
          <Card>
            <CardHeader>
              <CardTitle>Card</CardTitle>
              <CardDescription>Header, content and footer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                This is a simple card body with some text content.
              </p>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="secondary">Cancel</Button>
              <Button>Confirm</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
