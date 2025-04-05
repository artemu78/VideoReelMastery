import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  purpose: z.string().min(1, { message: "Please select how you plan to use the videos" }),
  comments: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

// IMPORTANT: Replace this with your actual Google Form ID when you create your form
const GOOGLE_FORM_ID = "1FAIpQLSexample-replace-with-your-form-id";

// Google Form field IDs - you need to replace these with your actual field IDs
// You can find them by inspecting the HTML of your Google Form in "Preview" mode
const GOOGLE_FORM_FIELDS = {
  email: "entry.123456789", // Replace with your email field ID
  purpose: "entry.987654321", // Replace with your purpose field ID
  comments: "entry.456789123" // Replace with your comments field ID
};

export default function RegisterForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("custom");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      purpose: "",
      comments: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // For demonstration, we're showing how to submit to Google Forms
      // This would be more proper to do server-side to avoid CORS issues
      
      // Create a FormData object to submit to Google Forms
      const formData = new FormData();
      formData.append(GOOGLE_FORM_FIELDS.email, data.email);
      formData.append(GOOGLE_FORM_FIELDS.purpose, data.purpose);
      if (data.comments) {
        formData.append(GOOGLE_FORM_FIELDS.comments, data.comments);
      }

      // In a production environment, you would submit this to Google
      // but due to CORS restrictions, we're just simulating it here
      console.log("Form data that would be submitted to Google Forms:", {
        [GOOGLE_FORM_FIELDS.email]: data.email,
        [GOOGLE_FORM_FIELDS.purpose]: data.purpose,
        [GOOGLE_FORM_FIELDS.comments]: data.comments || "",
      });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Registration successful!",
        description: "Thank you for registering for the masterclass. We'll be in touch soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Registration failed",
        description: "There was a problem with your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary/90 to-secondary/90 text-white" id="register">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm uppercase font-semibold tracking-wider text-white/80">Join The Masterclass</span>
          <h2 className="font-bold text-3xl md:text-4xl mt-2 mb-6">
            Register for Our <span className="text-white">AI Video Reels</span> Masterclass
          </h2>
          <p className="text-white/90 text-lg">Fill out the form below to secure your spot in the upcoming masterclass session</p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8 md:p-12">
            <h3 className="font-bold text-2xl text-foreground mb-6">Registration Form</h3>
            
            <Tabs defaultValue="custom" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="custom">Custom Form</TabsTrigger>
                <TabsTrigger value="google">Google Form</TabsTrigger>
              </TabsList>
              
              <TabsContent value="custom" className="mt-0">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">Your Contact Email*</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="yourname@example.com" 
                                {...field} 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="purpose"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">How do you plan to use the videos?*</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                                  <SelectValue placeholder="Select your primary purpose" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="social-media">Social Media Content</SelectItem>
                                <SelectItem value="marketing">Marketing and Advertising</SelectItem>
                                <SelectItem value="education">Educational Content</SelectItem>
                                <SelectItem value="personal">Personal Projects</SelectItem>
                                <SelectItem value="business">Business Presentations</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="comments"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">Any questions or comments?</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Let us know if you have any specific questions..." 
                                {...field} 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" 
                                rows={4}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-lg transition-all transform hover:scale-105"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Registration"}
                      </Button>
                    </form>
                  </Form>
                  
                  <div className="mt-4 text-center text-sm text-gray-500">
                    By submitting this form, you agree to our <a href="#" className="text-primary">Terms of Service</a> and <a href="#" className="text-primary">Privacy Policy</a>.
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="google" className="mt-0">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                  <div className="mb-6 text-gray-700">
                    <p className="mb-4">This is the embedded Google Form. Responses will be collected directly in your Google Forms account.</p>
                    <div className="p-2 bg-yellow-50 border border-yellow-200 rounded-lg mb-4">
                      <p className="text-yellow-800 text-sm">
                        <strong>Instructions:</strong> Replace the Google Form ID in the RegisterForm.tsx file with your own form ID.
                      </p>
                    </div>
                  </div>
                  
                  <div className="google-form-container w-full overflow-hidden rounded-lg">
                    <iframe 
                      src={`https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/viewform?embedded=true`} 
                      width="100%" 
                      height="600" 
                      style={{ border: "none" }}
                      title="Registration Form"
                    >
                      Loading…
                    </iframe>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="text-center text-gray-600">
              <p className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Your information is securely processed
              </p>
              <p>Need help? <a href="#" className="text-primary font-medium">Contact our support team</a></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
