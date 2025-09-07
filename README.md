# React

<h2>Menu Items</h2>

      <ul>
        {allItems.map((item) => {
          const { name, id, defaultPrice, price } = item?.card?.info || item?.dish?.info;
          return (
            <li key={id}>
              {name} - {"Rs. "}
              {defaultPrice / 100 || price / 100}
            </li>
          );
        })}
        ;
      </ul>