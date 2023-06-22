import { Suspense } from 'react'

async function getMyDog(id: string) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/my-dog/${id}`)
  return res.json()
}

async function Playlists({ id }: { id: string }) {
  // Wait for the playlists
  const playlists = await getMyDog(id)

  return <ul>Hela hundens info...</ul>
}

export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
  const myDogData = await Playlists({ id })

  return (
    <>
      <h1>id</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Playlists id={id} />
      </Suspense>
    </>
  )
}
