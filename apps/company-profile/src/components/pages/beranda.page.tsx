import React from 'react'
import { LandingPageLayout } from '../layouts'
import { AcademicBanner, EnrollmentBanner, GalleryBanner } from '../organisms'

type Props = {}

export default function BerandaPage({}: Props) {
  return (
    <LandingPageLayout>
      <EnrollmentBanner/>
      <AcademicBanner/>
      <GalleryBanner/>
    </LandingPageLayout>
  )
}