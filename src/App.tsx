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

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Pixelact + shadcn/ui Showcase
          </h1>
          <p className="text-muted-foreground">
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
                <label htmlFor="terms" className="text-sm leading-none cursor-pointer">
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
