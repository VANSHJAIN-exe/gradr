"use client"

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Button,
  Card,
  CardContent,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Slider
} from '@/components/ui';
import { 
  Upload,
  Image as ImageIcon,
  UploadCloud,
  X,
  Sparkles,
  Save,
  Download,
  Clock,
  History,
  Palette,
  Grid2X2
} from 'lucide-react';

export default function WorkspacePage() {
  const [activeTab, setActiveTab] = useState("upload");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedImage(event.target?.result as string);
      setActiveTab("edit");
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedImage(event.target?.result as string);
      setActiveTab("edit");
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleProcess = () => {
    if (!uploadedImage || !prompt.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate processing with a timeout
    setTimeout(() => {
      // For demo, we'll just use the sample images
      setProcessedImage("https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
      setIsProcessing(false);
    }, 2000);
  };

  const handleReset = () => {
    setUploadedImage(null);
    setProcessedImage(null);
    setPrompt("");
    setActiveTab("upload");
  };

  // Sample preset styles
  const presets = [
    { id: 1, name: "Cinematic", prompt: "Apply cinematic orange and teal color grade with deep shadows" },
    { id: 2, name: "Vintage Film", prompt: "Create vintage film look with faded colors and subtle grain" },
    { id: 3, name: "Vibrant Summer", prompt: "Enhance with vibrant summer tones and natural light boost" },
    { id: 4, name: "Moody Dark", prompt: "Create a dark, moody atmosphere with deep blues in shadows" },
    { id: 5, name: "Warm Portrait", prompt: "Apply warm portrait lighting with soft skin tones" },
    { id: 6, name: "Black & White", prompt: "Convert to dramatic black and white with strong contrast" }
  ];

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold font-space-grotesk mb-2">Jeta Workspace</h1>
            <p className="text-muted-foreground">Transform your images with AI-powered color grading</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main workspace area */}
            <div className="lg:col-span-8">
              <Card className="border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden">
                <Tabs defaultValue="upload" value={activeTab} onValueChange={setActiveTab}>
                  <div className="border-b border-border/50">
                    <TabsList className="w-full justify-start rounded-none bg-transparent p-0">
                      <TabsTrigger 
                        value="upload" 
                        className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none py-3 px-4 data-[state=active]:shadow-none"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload
                      </TabsTrigger>
                      <TabsTrigger 
                        value="edit" 
                        className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none py-3 px-4 data-[state=active]:shadow-none"
                        disabled={!uploadedImage}
                      >
                        <Palette className="h-4 w-4 mr-2" />
                        Edit
                      </TabsTrigger>
                      <TabsTrigger 
                        value="result" 
                        className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none py-3 px-4 data-[state=active]:shadow-none"
                        disabled={!processedImage}
                      >
                        <ImageIcon className="h-4 w-4 mr-2" />
                        Result
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <CardContent className="p-0">
                    {/* Upload Tab */}
                    <TabsContent value="upload" className="m-0">
                      <div 
                        className="h-[400px] flex flex-col items-center justify-center p-8 border-2 border-dashed border-border/60 rounded-lg m-6 bg-muted/40"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                      >
                        <div className="text-center">
                          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <UploadCloud className="h-10 w-10 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">Upload your image</h3>
                          <p className="text-muted-foreground mb-6 max-w-md">
                            Drag and drop your image here, or click the button below to select a file
                          </p>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                          />
                          <Button onClick={() => fileInputRef.current?.click()}>
                            Select Image
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                    
                    {/* Edit Tab */}
                    <TabsContent value="edit" className="m-0">
                      <div className="p-6">
                        {uploadedImage && (
                          <div className="mb-6">
                            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-border">
                              <Image
                                src={uploadedImage}
                                alt="Uploaded image"
                                fill
                                className="object-cover"
                              />
                              <button 
                                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border shadow-sm"
                                onClick={handleReset}
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        )}
                        
                        <div className="mb-6">
                          <h3 className="text-sm font-medium mb-2">Describe the look you want</h3>
                          <Textarea
                            placeholder="e.g., 'Apply cinematic orange and teal color grade with deep shadows'"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="min-h-[100px]"
                          />
                        </div>
                        
                        <div className="mb-6">
                          <h3 className="text-sm font-medium mb-2">Intensity</h3>
                          <Slider defaultValue={[75]} max={100} step={1} />
                        </div>
                        
                        <Button 
                          onClick={handleProcess} 
                          className="w-full"
                          disabled={isProcessing || !prompt.trim()}
                        >
                          {isProcessing ? (
                            <>Processing...</>
                          ) : (
                            <>
                              <Sparkles className="mr-2 h-4 w-4" /> 
                              Apply Color Grading
                            </>
                          )}
                        </Button>
                      </div>
                    </TabsContent>
                    
                    {/* Result Tab */}
                    <TabsContent value="result" className="m-0">
                      <div className="p-6">
                        {processedImage && (
                          <div className="mb-6">
                            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-border">
                              <Image
                                src={processedImage}
                                alt="Processed image"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex flex-wrap gap-3 mt-6">
                              <Button variant="outline" className="flex-1">
                                <Save className="mr-2 h-4 w-4" /> Save
                              </Button>
                              <Button variant="outline" className="flex-1">
                                <Download className="mr-2 h-4 w-4" /> Download
                              </Button>
                              <Button onClick={handleReset} className="flex-1">
                                Try Another
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </TabsContent>
                  </CardContent>
                </Tabs>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="space-y-6">
                {/* Presets */}
                <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium">Preset Styles</h3>
                      <Button variant="ghost" size="sm">
                        <Grid2X2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {presets.map((preset) => (
                        <div 
                          key={preset.id}
                          className="flex items-center p-2 rounded-md hover:bg-muted cursor-pointer"
                          onClick={() => {
                            setPrompt(preset.prompt);
                            if (uploadedImage) setActiveTab("edit");
                          }}
                        >
                          <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center mr-3">
                            <Palette className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{preset.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* History */}
                <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium">Recent History</h3>
                      <Button variant="ghost" size="sm">
                        <History className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-3">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded bg-muted flex-shrink-0">
                            {/* Placeholder for history image */}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">Color Grade #{item}</p>
                            <p className="text-xs text-muted-foreground flex items-center">
                              <Clock className="h-3 w-3 mr-1" /> 2h ago
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Pro Features Callout */}
                <Card className="border border-primary/20 bg-primary/5">
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">Upgrade to Pro</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get unlimited color grades, batch processing, and priority support.
                    </p>
                    <Button className="w-full">View Plans</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}