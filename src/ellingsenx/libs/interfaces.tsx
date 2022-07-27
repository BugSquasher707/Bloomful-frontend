export interface EgxAddressInterface {
  isPrimary: boolean
  address_line1: string
  address_line2: string
  city: string
  state: string
  country: string
  zipCode: string
}

export interface EgxPlatformInterface {
  id: string
}

export interface EgxUserInterface {
  id: string
  acceptedTerms: boolean
  addresses: EgxAddressInterface[]
  birthDate: string
  country: string
  createdAt: string
  email: string
  firstName: string
  gender: string
  isActive: boolean
  isEmailVerified: boolean
  isPhoneVerified: boolean
  isProfileComplete: boolean
  isVerified: boolean
  lastName: string
  middleName: string
  phoneNo: string
  platforms: EgxPlatformInterface[]
  roles: EgxUserRolesInterface
  subscribedNewsLetter: boolean
  syncThemeCompanyPlatforms: boolean
  syncThemeOS: boolean
  twoFactorEnabled: boolean
  updatedAt: string
  userName: string
}

export interface EgxUserRolesInterface {
  account?: string[]
  bloomfulx?: string[]
}

export interface EgxWalletInterface {
  createdAt: string
  id: string
  isActive: boolean
  updatedAt: string
  user: string
  wallet: number
}
