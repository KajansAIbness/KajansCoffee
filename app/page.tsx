"use client"

import type React from "react"
import { useState } from "react"
import { IceCream, Gift, MapPin, Cake, Coffee, Star } from "lucide-react"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-48 h-16">
              <Image src="/images/milkman-logo.png" alt="Milkman London Logo" fill className="object-contain" />
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-600 font-medium">Ice Cream • Desserts • Treats</p>
              <p className="text-sm text-gray-500">Euston's Sweetest Spot</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Location Banner */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg text-sm font-medium mb-4">
              <MapPin className="h-4 w-4" />
              134 Drummond Street, Euston, NW1 2PA
            </div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold mb-6 shadow-lg">
              <Gift className="h-5 w-5" />
              FREE TREAT VOUCHER
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Sweet Treats Await!</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Discover Euston's favorite ice cream and dessert destination.
              <br />
              Claim your complimentary treat and taste the difference!
            </p>
          </div>

          {/* Form Card */}
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500"></div>

            <CardHeader className="text-center pb-6 pt-8">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <IceCream className="h-10 w-10 text-blue-600" />
              </div>
              <CardTitle className="text-xl text-gray-800 font-semibold">Claim Your Free Treat</CardTitle>
              <CardDescription className="text-gray-600">
                Join the Milkman family and enjoy a complimentary ice cream, dessert, or drink on us!
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
                    <Star className="h-4 w-4 text-blue-500" />
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="h-12 border-gray-300 focus:border-blue-400 focus:ring-blue-400 rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium flex items-center gap-2">
                    <IceCream className="h-4 w-4 text-blue-500" />
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="h-12 border-gray-300 focus:border-blue-400 focus:ring-blue-400 rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    Phone Number
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    pattern="[0-9]{10,15}"
                    placeholder="Enter your phone number"
                    className="h-12 border-gray-300 focus:border-blue-400 focus:ring-blue-400 rounded-lg"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] rounded-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing Your Voucher...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Gift className="h-5 w-5" />
                      Claim My Free Treat
                    </div>
                  )}
                </Button>
              </form>

              {/* Terms */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500 leading-relaxed">
                  By submitting this form, you agree to receive updates about our latest treats and special offers.
                  <br />
                  One complimentary item per customer. Valid at our Camden location only.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* What We Offer */}
          <div className="mt-10 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 text-center mb-6">What's On Offer</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                  <IceCream className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-700 font-medium">Ice Cream</p>
                <p className="text-xs text-gray-500">Soft-serve & scooped</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                  <Cake className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-700 font-medium">Desserts</p>
                <p className="text-xs text-gray-500">Cakes & waffles</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                  <Coffee className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-700 font-medium">Crepes</p>
                <p className="text-xs text-gray-500">Sweet & savory</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-700 font-medium">Drinks</p>
                <p className="text-xs text-gray-500">Smoothies & Karak Chai</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Visit Us Today!</h3>
            <p className="text-sm text-gray-300 mb-3">
              Experience Euston's sweetest destination at 134 Drummond Street
            </p>
            <p className="text-xs text-gray-400">Open daily • Takeaway available • Perfect for treats on the go</p>
          </div>

          {/* Social Links */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">Follow us for sweet updates</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.facebook.com/profile.php?id=100071274365934"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">f</span>
                </div>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/milkmanlondon/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors font-medium"
              >
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">@</span>
                </div>
                Instagram
              </a>
              <a
                href="https://milkmanlondon.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-700 transition-colors font-medium"
              >
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">🌐</span>
                </div>
                Website
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white py-8 mt-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative w-32 h-8">
              <Image src="/images/milkman-logo.png" alt="Milkman Logo" fill className="object-contain" />
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-2">134 Drummond Street, Euston, London NW1 2PA</p>
          <p className="text-gray-500 text-xs">
            © 2024 Milkman London. All rights reserved. | Terms & Conditions | Privacy Policy
          </p>
        </div>
      </div>
    </div>
  )
}
