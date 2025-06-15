"use client"

import type React from "react"
import { useState } from "react"
import { Coffee, Gift, MapPin, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function MilkmanRedemptionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true)
    // Let the form submit naturally to the webhook
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-rose-100">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-16 h-16">
              <Image src="/images/milkman-logo.png" alt="Milkman Coffee Logo" fill className="object-contain" />
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800 tracking-wide">MILKMAN</h1>
              <p className="text-sm text-rose-600 font-medium">Artisan Coffee & More</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Location Banner */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-medium mb-4">
              <MapPin className="h-4 w-4" />
              134 Drummond Street, London
            </div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold mb-6 shadow-lg">
              <Gift className="h-5 w-5" />
              COMPLIMENTARY COFFEE
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Experience Our Artisan Coffee</h2>
            <p className="text-gray-600">
              Discover the perfect blend of quality and craftsmanship. Enjoy a complimentary coffee on us!
            </p>
          </div>

          {/* Form Card */}
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400"></div>

            <CardHeader className="text-center pb-6 pt-8">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <Coffee className="h-10 w-10 text-rose-600" />
              </div>
              <CardTitle className="text-xl text-gray-800 font-semibold">Claim Your Complimentary Coffee</CardTitle>
              <CardDescription className="text-gray-600">
                Join our community of coffee lovers and enjoy an artisan beverage crafted with care
              </CardDescription>
            </CardHeader>

            <CardContent className="px-8 pb-8">
              <form
                method="POST"
                action="http://localhost:5678/webhook-test/freecoffee"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium flex items-center gap-2">
                    <Heart className="h-4 w-4 text-rose-500" />
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="h-12 border-rose-200 focus:border-rose-400 focus:ring-rose-400 rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium flex items-center gap-2">
                    <Coffee className="h-4 w-4 text-rose-500" />
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="h-12 border-rose-200 focus:border-rose-400 focus:ring-rose-400 rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-rose-500" />
                    Phone Number
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    pattern="[0-9]{10,15}"
                    placeholder="Enter your phone number"
                    className="h-12 border-rose-200 focus:border-rose-400 focus:ring-rose-400 rounded-lg"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] rounded-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing Your Request...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Gift className="h-5 w-5" />
                      Claim My Complimentary Coffee
                    </div>
                  )}
                </Button>
              </form>

              {/* Terms */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500 leading-relaxed">
                  By submitting this form, you agree to receive updates about our artisan coffee and special offers.
                  <br />
                  One complimentary coffee per customer. Valid at our Drummond Street location.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center shadow-sm">
                <Coffee className="h-7 w-7 text-rose-600" />
              </div>
              <p className="text-sm text-gray-700 font-medium">Artisan Crafted</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center shadow-sm">
                <Star className="h-7 w-7 text-rose-600" />
              </div>
              <p className="text-sm text-gray-700 font-medium">Premium Quality</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center shadow-sm">
                <Heart className="h-7 w-7 text-rose-600" />
              </div>
              <p className="text-sm text-gray-700 font-medium">Made with Love</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">Follow us for more coffee inspiration</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100071274365934"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:text-rose-700 transition-colors"
              >
                Facebook
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="https://www.instagram.com/milkmanlondon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:text-rose-700 transition-colors"
              >
                Instagram
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="https://milkmanlondon.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:text-rose-700 transition-colors"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-gray-50 to-rose-50 py-8 mt-12 border-t border-rose-100">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative w-8 h-8">
              <Image src="/images/milkman-logo.png" alt="Milkman Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold text-gray-800">MILKMAN</span>
          </div>
          <p className="text-gray-600 text-sm mb-2">134 Drummond Street, London, United Kingdom</p>
          <p className="text-gray-500 text-xs">
            © 2024 Milkman Coffee. All rights reserved. | Terms & Conditions | Privacy Policy
          </p>
        </div>
      </div>
    </div>
  )
}
