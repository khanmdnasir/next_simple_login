'use client'

import { useState } from 'react'
import Image from 'next/image'
import LoginCard from '@/components/login_card'



export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [flashMessage, setFlashMessage] = useState('')
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      const response = await fetch('https://social-login.druckland.de/api/v1/user/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        setFlashMessage('Login successful!')
        setIsError(false)
      } else {
        setFlashMessage(data.message || 'Login failed!')
        setIsError(true)
      }
      } catch (error) {
      setFlashMessage('An error occurred. Please try again.')
      setIsError(true)
    }
  }

  return (
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-16 max-w-4xl mx-auto justify-center items-center">
            <div className="flex-1 bg-white p-8 shadow-md rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Image or Video of our services"
                width={600}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>
            <div>
                <LoginCard email={email} password={password} setEmail={setEmail} setPassword={setPassword} flashMessage={flashMessage} setFlashMessage={setFlashMessage} isError={isError} setIsError={setIsError} handleSubmit={handleSubmit} />
            </div>
            
          </div>
        </div>
      </main>
      
  )
}

