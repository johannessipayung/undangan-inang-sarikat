import { NextResponse } from 'next/server'
import Redis from 'ioredis'

// Menghubungkan menggunakan protokol TCP murni ke database cloud
const redis = new Redis("redis://default:jDQjjTeGk86iTDfZ4Fqja0EpLU46ViAs@size-special-dandy-83660.db.redis.io:13935")

const KV_KEY = 'invitation_messages'

// Handler GET: Mengambil data ucapan
export async function GET() {
  try {
    const messages = await redis.lrange(KV_KEY, 0, -1)
    return NextResponse.json(messages || [])
  } catch (error) {
    console.error('Error fetching messages from Redis:', error)
    return NextResponse.json({ error: 'Gagal memuat data ucapan dari cloud' }, { status: 500 })
  }
}

// Handler POST: Menyimpan ucapan baru dari form
export async function POST(request: Request) {
  try {
    const newMessage = await request.json()

    if (!newMessage.family || !newMessage.message) {
      return NextResponse.json({ error: 'Data ucapan tidak lengkap' }, { status: 400 })
    }

    // Menyimpan objek ucapan tunggal ke list
    await redis.lpush(KV_KEY, JSON.stringify(newMessage))
    return NextResponse.json({ success: true, data: newMessage })
  } catch (error) {
    console.error('Error saving message to Redis:', error)
    return NextResponse.json({ error: 'Gagal menyimpan data ucapan ke cloud' }, { status: 500 })
  }
}