import React from 'react'
import { LandingPageLayout } from '../layouts'
import { AcademicBanner, EnrollmentBanner } from '../organisms'

type Props = {}

export default function BerandaPage({}: Props) {
  return (
    <LandingPageLayout>
      <EnrollmentBanner/>
      <AcademicBanner/>
    </LandingPageLayout>
  )
}