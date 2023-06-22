<script lang="ts">
  import Container from '$lib/components/Container.svelte'
  import Label from '$lib/components/Label.svelte'
  import List from '$lib/components/List/index.svelte'
  import ListItem from '$lib/components/List/ListItem.svelte'
  import OwnerSign from '$lib/components/OwnerSign.svelte'
  import Text from '$lib/components/Text.svelte'
  import type { PageData } from './$types'
  export let data: PageData
  console.log(data)
  let name = data.name
  let owner = 'Oscar Gustafsson'

  const dogInfoArray = [
    {
      label: 'Name',
      text: 'Frank',
    },
    {
      label: 'Breed',
      text: 'American Akita',
    },
    {
      label: 'Favourit Treat',
      text: 'Skinka',
    },
  ]
</script>

<div class="main-doggos">
  <div>
    <a href="/our-dogs">go back</a>
    <h1>{name}</h1>
    <OwnerSign string={owner} />
  </div>

  <div class="main-doggos__wrapper">
    <div>
      <img src="/assets/frank.png" alt="Picture on the dog - {name}" />
    </div>

    <div>
      <List>
        {#each dogInfoArray as info}
          <ListItem>
            <Label label={info.label}>
              <Text size="small" bold>{info.text}</Text>
            </Label>
          </ListItem>
        {/each}
      </List>
    </div>

    <div class="border-divider" />

    <div>
      <div>
        <h4>UPCOMING office visits</h4>
      </div>
      <div>
        <h4>Previous office visits</h4>
        <div />
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .main-doggos {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(1, 1fr);

    h1 {
      font-size: 80px;
      margin-bottom: $spacing-20;
      color: $accent-color;
    }

    &__wrapper {
      height: 100%;
    }

    &__grid {
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: $spacing-20;
      grid-row-gap: $spacing-20;
    }
  }

  @media (max-width: 400px) {
    .main-doggos {
      &__grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }

  @media (max-width: 600px) {
    .main-doggos {
      h1 {
        position: initial;
      }
    }
  }

  @media (min-width: 600px) {
    .main-doggos {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      &__wrapper {
        height: 100%;
      }

      &__grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: $spacing-20;
        grid-row-gap: $spacing-20;
      }
    }
  }

  @media (min-width: 800px) {
    .main-doggos {
      &__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @media (min-width: 1200px) {
    .main-doggos {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      &__wrapper {
        height: 100%;
      }

      &__grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(300px, 300px));
      }
    }
  }
</style>
