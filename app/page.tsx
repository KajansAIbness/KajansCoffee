"use client"

import type React from "react"

import { useState } from "react"
import { Coffee, Gift, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CoffeeRedemptionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true)
    // Let the form submit naturally to the webhook
    // The loading state will show briefly before redirect/response
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-800 to-red-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3">
            <Coffee className="h-8 w-8" />
            <h1 className="text-3xl font-bold">COSTA COFFEE</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Promotional Banner */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold mb-4">
              <Gift className="h-5 w-5" />
              FREE COFFEE OFFER
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Redeem Your Complimentary Coffee</h2>
            <p className="text-gray-600">Enjoy a free handcrafted coffee on us! Simply fill out the form below.</p>
          </div>

          {/* Form Card */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-amber-600 to-red-600 rounded-full flex items-center justify-center mb-4">
                <Coffee className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-800">Claim Your Free Coffee</CardTitle>
              <CardDescription>Enter your details below to redeem your complimentary beverage</CardDescription>
            </CardHeader>

            <CardContent>
              <form
                method="POST"
                action="https://c56e-144-82-8-167.ngrok-free.app/webhook/freecoffee"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="h-12 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="h-12 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone Number
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    pattern="[0-9]{10,15}"
                    placeholder="Enter your phone number"
                    className="h-12 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white font-semibold text-lg shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Gift className="h-5 w-5" />
                      Redeem My Free Coffee
                    </div>
                  )}
                </Button>
              </form>

              {/* Terms */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  By submitting this form, you agree to receive promotional communications from Costa Coffee.
                  <br />
                  Offer valid for one free coffee per customer.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Coffee className="h-6 w-6 text-amber-600" />
              </div>
              <p className="text-sm text-gray-600">Premium Coffee</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-amber-600" />
              </div>
              <p className="text-sm text-gray-600">Quality Guaranteed</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Gift className="h-6 w-6 text-amber-600" />
              </div>
              <p className="text-sm text-gray-600">Completely Free</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Coffee className="h-6 w-6" />
            <span className="text-xl font-bold">COSTA COFFEE</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Costa Coffee. All rights reserved. | Terms & Conditions | Privacy Policy
          </p>
        </div>
      </div>
    </div>
  )
}
