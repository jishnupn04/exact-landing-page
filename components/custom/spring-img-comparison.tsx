"use client"

import type React from "react"
import { useContext } from "react"
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
  ImageComparisonContext,
} from "@/components/ui/image-comparison"
import { Section } from "../craft"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ImageComparisonComponent() {
  return (
    <Section className="py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 rounded-xl">
          {/* Left Side - Text Content */}
          <div className="max-w-lg text-left md:text-left ">
            <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
              Professional Quality
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Elevate Your Assessments with{" "}
              <span className="text-blue-600 dark:text-blue-400 font-extrabold">EXACT</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Experience the remarkable difference in quality and professionalism. Our LaTeX-based formatting engine
              transforms ordinary question papers into publication-quality documents that command attention and respect.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="mt-1 bg-blue-100 dark:bg-blue-900 rounded-full p-1">
                    <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>

            <Button className="group">
              Try EXACT Today
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Side - Image Comparison */}
          <div className="w-full md:w-[50%] flex justify-center relative h-[80vh] md:h-[70vh]">
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-30 dark:opacity-40 transition duration-1000 group-hover:opacity-100 animate-pulse"></div> */}
              <ImageComparison
                className="relative aspect-[4/3] w-full max-w-[600px] rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-xl"
                enableHover
                springOptions={{ bounce: 0.1 }}
              >
                <ImageComparisonImage src="/IA6.png" alt="LaTeX IA6" position="left" className="object-fill l:object-cover" />
                <ImagePositionAwareLabel position="left" />

                <ImageComparisonImage
                  src="/IA6 google doc.png"
                  alt="Google Doc IA6"
                  position="right"
                  className="object-fill md:object-cover"
                />
                <ImagePositionAwareLabel position="right" />

                <ImageComparisonSlider className="w-0.5 bg-white/70 backdrop-blur-sm after:h-10 after:w-10 after:rounded-full after:border-4 after:border-white after:bg-blue-600 after:shadow-md" />
              </ImageComparison>
          </div>
        </div>

      </div>
    </Section>
  )
}



// Custom Component for Image Labels with enhanced styling
interface ImagePositionAwareLabelProps {
  position: "left" | "right"
}

function ImagePositionAwareLabel({ position }: ImagePositionAwareLabelProps) {
  const context = useContext(ImageComparisonContext)
  if (!context) return null

  const { sliderPosition } = context
  const shouldShowLeftLabel = sliderPosition < 60
  const shouldShowRightLabel = sliderPosition > 40

  if (position === "left" && !shouldShowLeftLabel) return null
  if (position === "right" && !shouldShowRightLabel) return null

  return (
    <span
      className={`absolute top-4 ${
        position === "left" ? "right-4" : "left-4"
      } ${position === "left" ? "bg-blue-600" : "bg-gray-700"} 
      text-white px-4 py-2 text-sm font-semibold rounded-full shadow-md`}
    >
      {position === "left" ? "With EXACT" : "Without EXACT"}
    </span>
  )
}

// Sample benefits list
const benefits = [
  "Perfect mathematical typesetting and equation rendering",
  "Consistent formatting and professional layout",
  "Improved readability for students and educators",
  "Time-saving templates and automation",
]
