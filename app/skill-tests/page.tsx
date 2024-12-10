"use client";

import Image from "next/image";
import * as React from "react";
import { Button } from "@/components/ui/button";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { percentile: 0, frequency: 0 },
  { percentile: 17, frequency: 0.5 },
  { percentile: 23, frequency: 1 },
  { percentile: 32, frequency: 1.45 },
  { percentile: 34, frequency: 3 },
  { percentile: 43, frequency: 3.7 },
  { percentile: 48, frequency: 4 },
  { percentile: 50, frequency: 6 },
  { percentile: 52, frequency: 5.3 },
  { percentile: 65, frequency: 2 },
  { percentile: 73, frequency: 1.5 },
  { percentile: 80, frequency: 0.5 },
  { percentile: 90, frequency: 1.5 },
  { percentile: 90, frequency: 0.5 },
  { percentile: 100, frequency: 0 },
];

const chartConfig = {
  frequency: {
    label: "Frequency",
    color: "#000000",
  },
};

export default function SkillTestsPage() {
  const total = 15;

  const [rank, setRank] = React.useState<number | "">(1);
  const [percentile, setPercentile] = React.useState<number | "">(30);
  const [score, setScore] = React.useState<number | "">(10);
  const [error, setError] = React.useState<string>("");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSave = () => {
    if (rank === "" || rank < 1) {
      setError("Rank must be a positive number.");
      return;
    }
    if (percentile === "" || percentile < 0 || percentile > 100) {
      setError("Percentile must be between 0 and 100.");
      return;
    }
    if (score === "" || score < 0 || score > 15) {
      setError("Score must be between 0 and 15.");
      return;
    }
    setError("");
    setIsOpen(false);
  };
  const topics = [
    {
      title: "HTML Tools, Forms, History",
      progress: 80,
      color: "bg-blue-500",
    },
    {
      title: "Tags & References in HTML",
      progress: 60,
      color: "bg-orange-400",
    },
    {
      title: "Tables & References in HTML",
      progress: 24,
      color: "bg-red-400",
    },
    {
      title: "Tables & CSS Bascis",
      progress: 96,
      color: "bg-green-500",
    },
  ];

  return (
    <div className="flex">
      <div>
        <p className="text-l font-thin ml-10 mt-10 text-gray-500">Skill Test</p>
        <div className="flex items-center mt-8 ml-10 bg-white border border-gray-300 rounded-md p-4 w-[590px] ">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            alt="HTML5 Logo"
            className="w-12 h-12 mr-4"
            width={100}
            height={100}
          />
          <div className="flex-grow">
            <h2 className="text-lg font-semibold text-black pt-4">
              Hyper Text Markup Language
            </h2>
            <p className="text-gray-600 text-sm pb-4">
              Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </p>
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-900 text-white py-2 px-6 rounded-md text-sm font-medium hover:bg-blue-700">
                Update
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Update Scores</DialogTitle>
                <DialogDescription>
                  Make changes to your Score here. Click save when you have
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex items-center justify-between gap-4">
                  <Label htmlFor="rank" className="text-right">
                    Update Your Rank
                  </Label>
                  <Input
                    id="rank"
                    type="number"
                    value={rank}
                    onChange={(e) =>
                      setRank(
                        e.target.value === "" ? "" : parseInt(e.target.value)
                      )
                    }
                    className="w-full max-w-[200px]"
                  />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <Label htmlFor="percentile" className="text-right">
                    Update Your Percentile
                  </Label>
                  <Input
                    id="percentile"
                    type="number"
                    value={percentile}
                    onChange={(e) =>
                      setPercentile(
                        e.target.value === "" ? "" : parseFloat(e.target.value)
                      )
                    }
                    className="w-full max-w-[200px]"
                  />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <Label htmlFor="score" className="text-right">
                    Update Your Current Score (out of 15)
                  </Label>
                  <Input
                    id="score"
                    type="number"
                    value={score}
                    onChange={(e) =>
                      setScore(
                        e.target.value === "" ? "" : parseFloat(e.target.value)
                      )
                    }
                    className="w-full max-w-[200px]"
                  />
                </div>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <DialogFooter>
                <Button type="button" onClick={handleSave}>
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="bg-white border border-gray-300 rounded-md p-4 w-[590px] mt-10 ml-10 ">
          <p className="text-l font-thin text-gray-500 mb-4">
            Quick Statistics
          </p>

          <div className="flex items-center gap-8 pb-4">
            {/* Rank Section */}
            <div className="flex items-center">
              <Image
                src="https://static.vecteezy.com/system/resources/previews/011/257/977/non_2x/trophy-icon-gold-cup-best-for-tournament-or-championship-logo-illustration-vector.jpg"
                alt="Trophy"
                className="w-8 h-8 mr-2"
                width={100}
                height={100}
              />
              <div className="flex flex-col">
                <span className="text-2xl font-semibold text-black">
                  {rank}
                </span>
                <span className="text-gray-400 text-sm">YOUR RANK</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-12 bg-gray-300"></div>

            {/* Percentile Section */}
            <div className="flex items-center">
              <Image
                src="https://cdn3.vectorstock.com/i/1000x1000/55/07/checklist-icon-line-clipboard-symbol-vector-21085507.jpg"
                alt="Clipboard"
                className="w-8 h-8 mb-2"
                width={100}
                height={100}
              />
              <div className="flex flex-col">
                <span className="text-2xl font-semibold text-black">
                  {percentile}%
                </span>
                <span className="text-gray-400 text-sm">PERCENTILE</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-12 bg-gray-300"></div>

            {/* Correct Answers Section */}
            <div className="flex items-center">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLlBJmqHQ_JYn_m3KgHfUb6NRD4G2dVKqHA&s"
                alt="Checkmark"
                className="w-8 h-8 mb-2"
                width={100}
                height={100}
              />
              <div className="flex flex-col">
                <span className="text-2xl font-semibold text-black">
                  {score} / 15
                </span>
                <span className="text-gray-400 text-sm">CORRECT ANSWERS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 ml-10">
          <Card className="w-[590px]">
            <CardHeader>
              <CardTitle className="text-lg">Comparison Graph </CardTitle>
              <CardDescription>
                <span className="font-bold">
                  You scored {percentile} percentile
                </span>{" "}
                which is lower than the average percentile 72% of all the
                engineers who took this assessment
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full">
              <ChartContainer
                className="w-full mx-auto pr-10"
                config={chartConfig}
              >
                <LineChart
                  data={chartData}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 0,
                  }}
                  height={400}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="percentile"
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <YAxis
                    dataKey="frequency"
                    tickLine={false}
                    axisLine={false}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="frequency"
                    stroke={chartConfig.frequency.color}
                    strokeWidth={2}
                    dot={{
                      r: 4,
                      fill: chartConfig.frequency.color,
                    }}
                    activeDot={{
                      r: 6,
                    }}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="w-[590px] h-[540px] p-6 mx-auto space-y-8 bg-white rounded-lg mt-24 ml-10 border border-gray-300 pt-10">
        <h1 className="text-2xl font-bold">Syllabus Wise Analysis</h1>

        <div className="space-y-8">
          {topics.map((topic, index) => (
            <div key={index} className="space-y-2">
              <h2 className="text-lg text-gray-600">{topic.title}</h2>
              <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full ${topic.color} rounded-full transition-all duration-500`}
                  style={{ width: `${topic.progress}%` }}
                />
              </div>
              <div className="text-right">
                <span
                  className={`text-lg font-semibold ${topic.color.replace(
                    "bg-",
                    "text-"
                  )}`}
                >
                  {topic.progress}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Add a padding wrapper to avoid collapsing issues */}
        <div className="w-full p-6 mx-auto bg-white rounded-lg border border-gray-300 mt-16">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Question Analysis</h1>
            <span className="text-blue-500 text-xl font-semibold">
              {score}/{total}
            </span>
          </div>

          <p className="text-gray-600 text-lg mb-8">
            You scored {score} question correct out of {total}.{" "}
            {typeof score === "number" &&
              (score < 10
                ? "It still needs some improvements."
                : score >= 10 && score < 13
                ? "Well done, but you can do better."
                : score >= 13 && score <= 15
                ? "Bravo! You can work on your mistakes."
                : "Bravo! You have aced the exam.")}
          </p>

          <div className="flex justify-center">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-gray-100"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="45"
                  cx="50"
                  cy="50"
                />
                <circle
                  className="text-blue-500"
                  strokeWidth="10"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="45"
                  cx="50"
                  cy="50"
                  strokeDasharray={`${
                    ((typeof score === "number" ? score : 0) / total) * 282.7
                  } 282.7`}
                  transform="rotate(-90 50 50)"
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-red-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
