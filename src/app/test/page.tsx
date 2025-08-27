"use client"

import { useState } from "react"
import { toast } from "sonner"
import {
  ArrowUpDown,
  Copy,
  Download,
  Moon,
  Sun,
  Twitter,
  Sparkles,
  Settings,
  ChevronRight
} from "lucide-react"

// UI Components
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Toggle } from "@/components/ui/toggle"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Chart Components
import { Area, AreaChart, Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

export default function ComponentsTest() {
  const [darkMode, setDarkMode] = useState(false)
  const [sliderValue, setSliderValue] = useState([50])
  const [switchOn, setSwitchOn] = useState(false)
  const [progress, setProgress] = useState(65)

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  // Sample data for charts
  const chartData = [
    { day: "Mon", screenshots: 12, downloads: 8 },
    { day: "Tue", screenshots: 19, downloads: 15 },
    { day: "Wed", screenshots: 25, downloads: 20 },
    { day: "Thu", screenshots: 32, downloads: 28 },
    { day: "Fri", screenshots: 45, downloads: 35 },
    { day: "Sat", screenshots: 52, downloads: 40 },
    { day: "Sun", screenshots: 38, downloads: 30 },
  ]

  // Sample table data
  const tableData = [
    { id: 1, tweet: "Amazing product launch!", date: "2024-01-15", downloads: 245 },
    { id: 2, tweet: "Check out our new features", date: "2024-01-14", downloads: 189 },
    { id: 3, tweet: "Twitter Screenshot is live!", date: "2024-01-13", downloads: 432 },
  ]

  // Gradient presets using CSS variables
  const gradients = [
    { name: "Purple Dream", class: "gradient-purple-dream" },
    { name: "Sunset", class: "gradient-sunset" },
    { name: "Ocean", class: "gradient-ocean" },
    { name: "Mint", class: "gradient-mint" },
    { name: "Fire", class: "gradient-fire" },
  ]

  // Get CSS variable value
  const getCSSVariable = (variable: string): string => {
    if (typeof window !== 'undefined') {
      return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    }
    return '';
  }

  return (
      <div className="min-h-screen p-8 max-w-7xl mx-auto space-y-8">
        {/* Header with Dark Mode Toggle */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">
              Component Test Page
            </h1>
            <p className="text-muted-foreground mt-2">Testing all shadcn components with purple theme</p>
          </div>
          <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Buttons Section */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons & Actions</CardTitle>
            <CardDescription>Various button styles and states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><Twitter className="h-4 w-4" /></Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button disabled>Disabled</Button>
              <Button>
                <Sparkles className="mr-2 h-4 w-4" />
                With Icon
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Form Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Form Controls</CardTitle>
            <CardDescription>Input fields and form elements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="tweet-url">Tweet URL</Label>
              <Input
                  id="tweet-url"
                  placeholder="https://twitter.com/username/status/..."
              />
            </div>

            <div className="space-y-2">
              <Label>Background Style</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a gradient" />
                </SelectTrigger>
                <SelectContent>
                  {gradients.map(g => (
                      <SelectItem key={g.name} value={g.class}>{g.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Padding: {sliderValue}px</Label>
              <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                  className="w-full"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                  checked={switchOn}
                  onCheckedChange={setSwitchOn}
              />
              <Label>Enable watermark</Label>
            </div>

            <div className="space-y-2">
              <Label>Additional notes</Label>
              <Textarea placeholder="Type your message here..." />
            </div>
          </CardContent>
        </Card>

        {/* Tabs Example */}
        <Card>
          <CardHeader>
            <CardTitle>Screenshot Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="style" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="style">Style</TabsTrigger>
                <TabsTrigger value="export">Export</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>
              <TabsContent value="style" className="space-y-4">
                <div className="flex gap-2">
                  <Toggle pressed>Dark Mode</Toggle>
                  <Toggle>Hide Metrics</Toggle>
                  <Toggle>Show Avatar</Toggle>
                </div>
              </TabsContent>
              <TabsContent value="export" className="space-y-4">
                <div className="flex gap-2">
                  <Button className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Download PNG
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Copy className="mr-2 h-4 w-4" />
                    Copy to Clipboard
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="advanced" className="space-y-4">
                <Alert>
                  <Sparkles className="h-4 w-4" />
                  <AlertTitle>Pro Feature</AlertTitle>
                  <AlertDescription>
                    Advanced settings are available in the Pro version.
                  </AlertDescription>
                </Alert>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Area Chart</CardTitle>
              <CardDescription>Weekly screenshot creation</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorScreenshots" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" style={{ fontSize: 'var(--chart-font-size)' }} />
                  <YAxis stroke="var(--muted-foreground)" style={{ fontSize: 'var(--chart-font-size)' }}/>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <Tooltip
                      contentStyle={{
                        backgroundColor: 'var(--background)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)'
                      }}
                  />
                  <Area
                      type="monotone"
                      dataKey="screenshots"
                      stroke="var(--chart-1)"
                      fillOpacity={1}
                      fill="url(#colorScreenshots)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bar Chart</CardTitle>
              <CardDescription>Downloads by day</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={chartData}>
                  <XAxis dataKey="day" stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" />
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <Tooltip
                      contentStyle={{
                        backgroundColor: 'var(--background)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)'
                      }}
                  />
                  <Bar dataKey="downloads" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Multi-color Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Multi-Series Chart</CardTitle>
            <CardDescription>Using different chart colors</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData}>
                <XAxis dataKey="day" stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" />
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--background)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)'
                    }}
                />
                <Line type="monotone" dataKey="screenshots" stroke="var(--chart-1)" strokeWidth={2} />
                <Line type="monotone" dataKey="downloads" stroke="var(--chart-2)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Screenshots List */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Screenshots</CardTitle>
            <CardDescription>Your latest tweet captures</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {tableData.map((row) => (
                  <div
                      key={row.id}
                      className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="font-medium">{row.tweet}</p>
                      <p className="text-sm text-muted-foreground">{row.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{row.downloads}</p>
                      <p className="text-xs text-muted-foreground">downloads</p>
                    </div>
                  </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Other Components */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Status & Badges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Error</Badge>
              </div>
              <Separator />
              <Progress value={progress} className="w-full" />
              <p className="text-sm text-muted-foreground">Export progress: {progress}%</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Loading States</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardContent>
          </Card>
        </div>

        {/* Dialogs and Menus */}
        <Card>
          <CardHeader>
            <CardTitle>Dialogs & Menus</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Export Screenshot</DialogTitle>
                  <DialogDescription>
                    Choose your export settings and format.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>Format</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="PNG" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="png">PNG</SelectItem>
                        <SelectItem value="jpg">JPG</SelectItem>
                        <SelectItem value="svg">SVG</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Export</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Settings className="mr-2 h-4 w-4" />
                  Options
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardContent>
        </Card>

        {/* Toast Triggers */}
        <Card>
          <CardHeader>
            <CardTitle>Notifications (Sonner)</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button
                variant="outline"
                onClick={() => toast.success("Screenshot saved successfully!")}
            >
              Success Toast
            </Button>
            <Button
                variant="outline"
                onClick={() => toast.error("Failed to fetch tweet")}
            >
              Error Toast
            </Button>
            <Button
                variant="outline"
                onClick={() => toast.info("Processing your request...")}
            >
              Info Toast
            </Button>
            <Button
                variant="outline"
                onClick={() => {
                  const promise = new Promise((resolve) => {
                    setTimeout(resolve, 2000)
                  })
                  toast.promise(promise, {
                    loading: 'Generating screenshot...',
                    success: 'Screenshot ready!',
                    error: 'Failed to generate',
                  })
                }}
            >
              Promise Toast
            </Button>
          </CardContent>
        </Card>

        {/* Gradient Showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Gradient Backgrounds</CardTitle>
            <CardDescription>Preview of gradient options for screenshots</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {gradients.map((gradient) => (
                  <div key={gradient.name} className="space-y-2">
                    <div
                        className={`h-24 rounded-lg shadow-lg ${gradient.class} animate-gradient`}
                    />
                    <p className="text-sm text-center text-muted-foreground">
                      {gradient.name}
                    </p>
                  </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Color Palette Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Color System</CardTitle>
            <CardDescription>Purple-based color palette</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Primary Colors</h4>
                <div className="flex gap-2">
                  <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground text-xs">Primary</span>
                  </div>
                  <div className="w-20 h-20 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-secondary-foreground text-xs">Secondary</span>
                  </div>
                  <div className="w-20 h-20 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground text-xs">Accent</span>
                  </div>
                  <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground text-xs">Muted</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Chart Colors</h4>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(i => (
                      <div
                          key={i}
                          className="w-16 h-16 rounded-lg shadow-sm flex items-center justify-center text-xs font-medium"
                          style={{
                            backgroundColor: `var(--chart-${i})`,
                            color: darkMode ? 'var(--background)' : 'var(--foreground)'
                          }}
                      >
                        {i}
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Border Radius Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Border Radius System</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <div className="w-20 h-20 bg-primary/10 border-2 border-primary rounded-sm flex items-center justify-center">
              <span className="text-xs">SM</span>
            </div>
            <div className="w-20 h-20 bg-primary/10 border-2 border-primary rounded-md flex items-center justify-center">
              <span className="text-xs">MD</span>
            </div>
            <div className="w-20 h-20 bg-primary/10 border-2 border-primary rounded-lg flex items-center justify-center">
              <span className="text-xs">LG</span>
            </div>
            <div className="w-20 h-20 bg-primary/10 border-2 border-primary rounded-xl flex items-center justify-center">
              <span className="text-xs">XL</span>
            </div>
          </CardContent>
        </Card>
      </div>
  )
}