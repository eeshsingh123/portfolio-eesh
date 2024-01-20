import React from "react";
import { PROJECTS, TECH } from "@/constants";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-semibold text-2xl">My Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6">
        {PROJECTS.map((el, idx) => (
          <div key={idx}>
            <Link href={el.url}>
              <Card className="max-w-xl max-h-fit hover:bg-blue-100 shadow-sm hover:shadow-lg bg-slate-50">
                <CardHeader>
                  <CardTitle>{el.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={el.imageSrc}
                    alt={`${el.name} Project`}
                    width={600}
                    height={200}
                    quality={100}
                    className="gap-1 hover:border-2 border-cyan-400 rounded-md"
                  />
                  <p className="pt-2">{el.description}</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="font-semibold text-2xl pt-4">Technologies I know</div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6">
        {TECH.map((el, idx) => (
          <div key={idx}>
            <Card className="max-w-xl max-h-fit shadow-sm hover:shadow-lg bg-slate-50">
              <CardHeader>
                <CardTitle>{el.framework}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {el.technologies.map((tech, i) => (
                    <div key={i} className="p-2 bg-yellow-200/50 hover:bg-yellow-300 rounded-lg font-mono font-semibold">{tech}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Hero;
