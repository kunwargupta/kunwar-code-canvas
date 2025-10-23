import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            My <span className="text-gradient">Resume</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            View or download my complete resume
          </p>
        </div>

        <Card className="p-8 card-hover">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText size={24} className="text-primary" />
                <div>
                  <h3 className="font-semibold">Kunwar_Gupta_Resume.pdf</h3>
                  <p className="text-sm text-muted-foreground">Last updated: January 2025</p>
                </div>
              </div>
              <Button className="gap-2 glow-effect">
                <Download size={20} />
                Download
              </Button>
            </div>

            <div className="border-2 border-border rounded-lg bg-muted/30 h-[600px] flex items-center justify-center">
              <div className="text-center space-y-4">
                <FileText size={64} className="mx-auto text-muted-foreground" />
                <div>
                  <p className="text-muted-foreground mb-2">PDF Preview</p>
                  <p className="text-sm text-muted-foreground">
                    Your resume will be displayed here
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button variant="outline" className="gap-2">
                <Download size={20} />
                Download PDF
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Resume;
