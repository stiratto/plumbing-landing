import { useForm, type SubmitHandler } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { QuoteSchema, type TQuoteSchema } from "@/schemas/QuoteSchema";
import { zodResolver } from "@hookform/resolvers/zod"
import { SERVICES_NEEDED } from "@/lib/consts";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function QuoteForm() {

   const form = useForm<TQuoteSchema>({
      resolver: zodResolver(QuoteSchema),
   })


   const onSubmit: SubmitHandler<TQuoteSchema> = (data, ev) => {
      ev?.preventDefault()
      console.log(data)
   }

   return (
      <Form {...form}>
         <form className="space-y-6 text-darkgreen" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 gap-6">
               <div>
                  <FormField name="name" render={({ field }) => (
                     <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                           <Input {...field} className="w-full px-4 py-3 border border-darkgreen/30" />
                        </FormControl>
                     </FormItem>
                  )} />

               </div>
               <div>
                  <FormField name="phone" render={({ field }) => (
                     <FormItem>
                        <FormLabel className="">Phone</FormLabel>
                        <FormControl>
                           <Input type="number" {...field} className="w-full px-4 py-3 border border-darkgreen/30 rounded-lg" />
                        </FormControl>
                     </FormItem>
                  )} />
               </div>
            </div>
            <FormField control={form.control} name="email" render={({ field }) => (
               <FormItem>
                  <FormLabel className="text-darkgreen">Email</FormLabel>
                  <FormControl>
                     <Input {...field} className="w-full px-4 py-3 border border-darkgreen/30 rounded-lg" />
                  </FormControl>
               </FormItem>
            )} />

            <FormField control={form.control} name="service_needed" render={({ field }) => (
               <FormItem>
                  <FormLabel className="text-darkgreen">Service needed</FormLabel>
                  <Select name="service_needed" onValueChange={field.onChange} defaultValue={field.value}>
                     <FormControl>
                        <SelectTrigger className="w-full">
                           <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                     </FormControl>

                     <SelectContent
                     >
                        {
                           SERVICES_NEEDED.map((item) => (
                              <SelectItem key={item} value={item.toLowerCase().replace(" ", "-")}>
                                 {item}
                              </SelectItem>
                           ))
                        }
                     </SelectContent>
                  </Select>

               </FormItem>
            )} />

            <FormField control={form.control} name="message" render={({ field }) => (
               <FormItem>
                  <FormLabel className="text-darkgreen">Message</FormLabel>
                  <FormControl>
                     <Textarea placeholder="Hey, I would like to get a quote..." {...field} className="w-full px-4 py-3 border border-darkgreen/30 rounded-lg" rows={4} />
                  </FormControl>
               </FormItem>
            )} />
            <button
               type="submit"
               className="w-full bg-blue-600 text-white py-4 rounded-lg font-display font-semibold text-lg hover:bg-blue-700 transition-colors duration-200"
            >
               Request Free Quote
            </button>
         </form>
      </Form >
   )
}
