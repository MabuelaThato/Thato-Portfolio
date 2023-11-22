import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const Skills = () => {
  return (
    <div className=''>

    <Card>
  <CardHeader>
    <CardTitle>Front-end development</CardTitle>
    <CardDescription>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Nextjs</li>
        <li>API intergration</li>
        <li>Front-end frameworks</li>
        <li>Responsive design</li>
        <li>Git</li>
      </ul>
      <div className='grid grid-cols-2'>
        <div>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>API intergration</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>React</li>
            <li>Nextjs</li>
            <li>Front-end frameworks</li>
            <li>Responsive design</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

</div>
  )
}
