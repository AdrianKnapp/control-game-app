'use client'

import Button from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'

type Inputs = {
  name: string
  email: string
  content: string
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  content: yup.string().required()
})

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema)
  })
  const [isEmailSent, setIsEmailSent] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          contact: {
            ...data
          }
        })
      })

      console.log('success')
      setIsEmailSent(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className="rounded-xl bg-white p-5">
      {isEmailSent ? (
        <p>E-mail enviado com sucesso.</p>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 lg:gap-5"
        >
          <p className="text-center text-lg font-semibold text-teal-700">
            Entre em contato
          </p>
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-5">
            <Input
              label="Nome"
              placeholder="Qual é o seu nome?"
              {...register('name')}
              error={errors.name ? 'Campo inválido' : undefined}
            />
            <Input
              label="E-mail"
              type="email"
              placeholder="Seu melhor e-mail"
              {...register('email')}
              error={errors.email ? 'Campo inválido' : undefined}
            />
          </div>
          <Textarea
            label="Assunto"
            id="content"
            placeholder="Como podemos te ajudar?"
            {...register('content')}
            error={errors.content ? 'Campo inválido' : undefined}
          />
          <div className="mt-2">
            <Button type="submit">Enviar</Button>
          </div>
        </form>
      )}
    </section>
  )
}
