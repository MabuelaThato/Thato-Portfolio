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
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
    fullName: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    message: z.string().min(2).max(150),
  })

const Contact = () => {

    const { toast } = useToast()

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

        const data2 = {
            service_id: 'service_vi8loqv',
            template_id: 'template_6o4uztm',
            user_id: 'RSDwXqQkjUZrYQIvd',
            template_params: {
                from_name: values.fullName,
                from_email: values.email,
            }
        };

        try {
            const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send',data)
            console.log(res.data)
            const res2 = await axios.post('https://api.emailjs.com/api/v1.0/email/send',data2)
            console.log(res2.data)
            router.push("/")
          } catch (error) {
            console.error(error)
          }
  
      }
  return (
    <div className='m-6 md:my-12 lg:mx-12' id='contact'>
        
        <div className='drop-shadow-xl bg-white p-8 lg:p-24 md:py-16 rounded-lg'>
            <h1 className='text-2xl md:text-4xl font-semibold mb-4 md:mb-12'>Get in touch</h1>
        <div className='md:grid md:grid-cols-2 md:divide-x md:py-6'>
            <img src="contact.jpg" alt="" className='w-[300px] md:w-[500px] md:px-8'/>
            <div className='md:px-4 lg:px-8 mt-6 md:mt-0'>
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
                        <Button type="submit" className='w-full'
                         onClick={() => {
                            toast({
                                description: "Your message has been sent.",
                            })
                          }}
                        >Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact