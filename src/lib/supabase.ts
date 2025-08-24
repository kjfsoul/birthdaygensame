import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database types
export interface BirthdayCard {
  id: string
  user_id?: string
  title: string
  message: string
  template: string
  colors: {
    primary: string
    secondary: string
    accent: string
  }
  recipient_name: string
  sender_name: string
  created_at: string
  updated_at: string
}

export interface Party {
  id: string
  user_id?: string
  title: string
  date: string
  time: string
  location: string
  theme: string
  guest_count: number
  budget: number
  notes: string
  checklist: Array<{
    item: string
    completed: boolean
    category: string
  }>
  created_at: string
  updated_at: string
}

export interface Gift {
  id: string
  name: string
  description: string
  price_range: string
  age_group: string
  interests: string[]
  category: string
  image_url?: string
  affiliate_link?: string
  rating: number
  created_at: string
}

export interface Memory {
  id: string
  user_id?: string
  title: string
  description: string
  date: string
  images: string[]
  tags: string[]
  is_public: boolean
  likes: number
  created_at: string
  updated_at: string
}
