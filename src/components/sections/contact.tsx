
import React, { useState } from 'react';
import { NeonText } from '../neon-text';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([
    '> system.init()',
    '> Loading contact module...',
    '> Ready to receive message...'
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    if (terminalLines.length <= 5) {
      setTerminalLines(prev => [...prev, `> User input detected: ${name}`]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate terminal activity
    setTerminalLines(prev => [
      ...prev, 
      '> Processing submission...',
      `> Sender: ${formState.name}`,
      `> Validating email: ${formState.email}`,
      '> Encrypting message content...'
    ]);
    
    setTimeout(() => {
      setTerminalLines(prev => [
        ...prev,
        '> Message successfully transmitted!',
        '> Awaiting next input...'
      ]);
      
      toast({
        title: "Message Sent!",
        description: "I'll get back to you as soon as possible.",
        variant: "default",
      });
      
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setTerminalLines([
          '> system.init()',
          '> Contact module ready',
          '> Awaiting new message...'
        ]);
      }, 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <NeonText as="h2" gradient className="text-4xl md:text-5xl font-bold mb-4">
            Contact Me
          </NeonText>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary to-accent rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? Let's talk!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="professional-card hover-lift p-8">
            <h3 className="text-xl font-semibold mb-6">
              <NeonText color="blue">Get In Touch</NeonText>
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="glass-effect border-primary/30 focus:border-primary focus:ring-primary/20"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="glass-effect border-primary/30 focus:border-primary focus:ring-primary/20"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="glass-effect border-primary/30 focus:border-primary focus:ring-primary/20"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full professional-button text-white font-semibold"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="professional-card hover-lift p-8 h-full">
            <h3 className="text-xl font-semibold mb-6">
              <NeonText color="purple">Terminal</NeonText>
            </h3>
            
            <div className="bg-professional-darker/70 rounded-lg p-4 h-[300px] overflow-y-auto font-mono text-sm border border-primary/20">
              {terminalLines.map((line, index) => (
                <div key={index} className={`mb-1 ${index === terminalLines.length - 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                  {line}
                </div>
              ))}
              <div className="animate-pulse text-accent">_</div>
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center p-3 glass-effect rounded-lg">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <span className="text-primary text-lg">@</span>
                </div>
                <div>
                  <h4 className="text-foreground font-medium">Email</h4>
                  <NeonText as="p" className="text-sm">
                    harsh@example.com
                  </NeonText>
                </div>
              </div>
              
              <div className="flex items-center p-3 glass-effect rounded-lg">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                  <span className="text-accent text-lg">#</span>
                </div>
                <div>
                  <h4 className="text-foreground font-medium">Social</h4>
                  <div className="flex space-x-3 mt-1">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors">LinkedIn</a>
                    <a href="#" className="text-muted-foreground hover:text-professional-purple transition-colors">Twitter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
