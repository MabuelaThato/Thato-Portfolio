"use client"
import React from 'react'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import axios from 'axios'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
    fullName: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    message: z.string().min(2).max(150),
  })

const Contact = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          fullName: "",
          email: "",
          message: "",
        },
      })

      const router = useRouter()
      async function onSubmit(values: z.infer<typeof formSchema>) {
        const data = {
            service_id: 'service_vi8loqv',
            template_id: 'template_4txznrf',
            user_id: 'RSDwXqQkjUZrYQIvd',
            template_params: {
                from_name: values.fullName,
                from_email: values.email,
                message: values.message
            }
        };
  
        try {
          const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send',data)
          console.log(res.data)
          router.push("/")
        } catch (error) {
          console.error(error)
        }
      }
  return (
    <div className='my-12' id='contact'>
        
        <div className='drop-shadow-xl bg-white p-24 py-16 rounded-lg'>
            <h1 className='text-4xl font-medium mb-12'>Get in touch</h1>
        <div className='grid grid-cols-2 divide-x py-6'>
            <img src="contact.jpg" alt="" className='w-[500px] px-8'/>
            <div className='px-8'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Full name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="john@doe.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" className='w-full'>Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact