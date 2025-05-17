import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Book } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is transforming the way we build, test, and deploy software applications.",
      date: "May 14, 2024",
      tags: ["AI", "Software Development", "Innovation"],
      imageUrl: "https://images.unsplash.com/photo-1673599143285-45caa8a0d934?auto=format&fit=crop&q=80&w=870"
    },
    {
      title: "Leading Technical Teams Through Digital Transformation",
      excerpt: "Strategies for executives to successfully guide engineering teams through complex organizational changes.",
      date: "April 28, 2024",
      tags: ["Leadership", "Digital Transformation", "Engineering Culture"],
      imageUrl: "https://images.unsplash.com/photo-1577017040065-650ee4d43339?auto=format&fit=crop&q=80&w=870"
    },
    {
      title: "Optimizing Microservice Architecture for Enterprise Scale",
      excerpt: "Key considerations and best practices for designing microservices that can scale to meet enterprise demands.",
      date: "March 15, 2024",
      tags: ["Microservices", "Architecture", "Scalability"],
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=870"
    }
  ];

  return (
    <section id="blog" className="section bg-background">
      <div className="container-tight">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Latest Blog Posts
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights and thoughts on technology leadership, AI development, and industry trends
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all bg-card text-card-foreground">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${post.imageUrl})` }}
              />
              <CardContent className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <Book className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-primary line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="ghost"
                  className="p-0 h-auto hover:bg-transparent text-primary hover:text-primary/90 flex items-center"
                >
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline"
            size="lg"
          >
            View All Blog Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
