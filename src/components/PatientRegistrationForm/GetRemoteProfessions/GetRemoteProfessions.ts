import React, { useCallback } from 'react'
export type Pokemon = {
  name: string
  url: string
}

export type UsePokemonListProps = {
  fetchDelay?: number
}

export function GetRemoteProfessions({
  fetchDelay = 0
}: UsePokemonListProps = {}) {
  const [items, setItems] = React.useState<Pokemon[]>([])
  const [hasMore, setHasMore] = React.useState(true)
  const [isLoading, setIsLoading] = React.useState(false)
  const [offset, setOffset] = React.useState(0)
  const limit = 10

  const loadProfession = useCallback(
    async (currentOffset: number) => {
      const controller = new AbortController()
      const { signal } = controller

      try {
        setIsLoading(true)

        if (offset > 0) {
          await new Promise((resolve) => setTimeout(resolve, fetchDelay))
        }

        let res = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${currentOffset}&limit=${limit}`,
          { signal }
        )

        if (!res.ok) {
          throw new Error('Network response was not ok')
        }

        let json = await res.json()

        setHasMore(json.next !== null)
        setItems((prevItems) => [...prevItems, ...json.results])
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    },
    [fetchDelay, offset]
  )

  React.useEffect(() => {
    loadProfession(offset)
  }, [loadProfession, offset])

  const onLoadMore = () => {
    const newOffset = offset + limit

    setOffset(newOffset)
    loadProfession(newOffset)
  }

  return {
    items,
    hasMore,
    isLoading,
    onLoadMore
  }
}
