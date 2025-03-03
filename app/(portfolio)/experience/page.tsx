"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const workExperience = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Lead frontend development for multiple web applications, mentored junior developers, and implemented modern frontend architecture using React and Next.js.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description: "Developed responsive web applications, collaborated with UX/UI designers, and optimized application performance.",
    skills: ["React", "JavaScript", "SCSS", "Redux"],
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    period: "2016 - 2018",
    description: "Built and maintained client websites, implemented responsive designs, and worked with content management systems.",
    skills: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];

const education = [
  {
    id: 1,
    degree: "Master of Computer Science",
    institution: "Tech University",
    period: "2014 - 2016",
    description: "Specialized in web technologies and user interface design. Graduated with honors.",
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    period: "2010 - 2014",
    description: "Focused on software development fundamentals and computer science theory.",
  },
];

const TimelineItem = ({ children, isLast = false }: { children: ReactNode, isLast: boolean }) => {
  return (
    <div className="relative pl-8 pb-8">
      {!isLast && (
        <div className="absolute top-0 left-3 h-full w-px bg-border"></div>
      )}
      <div className="absolute top-0 left-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
        <div className="h-3 w-3 rounded-full bg-background"></div>
      </div>
      {children}
    </div>
  );
};

export default function ExperiencePage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Experience</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold">Work Experience</h2>
            </div>
            
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
            >
              {workExperience.map((job, index) => (
                <motion.div key={job.id} variants={item}>
                  <TimelineItem isLast={index === workExperience.length - 1}>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{job.title}</CardTitle>
                          <Badge variant="outline">{job.period}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm mb-3">{job.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TimelineItem>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold">Education</h2>
            </div>
            
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
            >
              {education.map((edu, index) => (
                <motion.div key={edu.id} variants={item}>
                  <TimelineItem isLast={index === education.length - 1}>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{edu.degree}</CardTitle>
                          <Badge variant="outline">{edu.period}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{edu.description}</p>
                      </CardContent>
                    </Card>
                  </TimelineItem>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}