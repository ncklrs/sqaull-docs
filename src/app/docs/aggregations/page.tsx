"use client";

import { CodeBlock } from "@/components/CodeBlock";
import { useSyntaxMode } from "@/hooks/useSyntaxMode";

export default function AggregationsPage() {
  const { isGenAlpha } = useSyntaxMode();

  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">Aggregations</h1>

      <p className="text-xl text-text-secondary mb-8">
        Compute summaries, counts, and statistics with aggregate functions.
        {isGenAlpha && " Stack up those numbers bestie 📊"}
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Aggregate Functions</h2>

      <CodeBlock
        og={`// COUNT - count rows
cook\`from:users sel:cnt:*\`
// → SELECT COUNT(*) FROM users

// SUM - sum values
cook\`from:orders sel:sum:total\`
// → SELECT SUM(total) FROM orders

// AVG - average value
cook\`from:products sel:avg:price\`
// → SELECT AVG(price) FROM products

// MIN / MAX
cook\`from:products sel:min:price,max:price\`
// → SELECT MIN(price), MAX(price) FROM products`}
        genalpha={`// COUNT - count rows
cook\`main:users slay:cnt:*\`
// → SELECT COUNT(*) FROM users

// SUM - sum values
cook\`main:orders slay:sum:total\`
// → SELECT SUM(total) FROM orders

// AVG - average value
cook\`main:products slay:avg:price\`
// → SELECT AVG(price) FROM products

// MIN / MAX
cook\`main:products slay:min:price,max:price\`
// → SELECT MIN(price), MAX(price) FROM products`}
        title="basic.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">With Aliases</h2>

      <CodeBlock
        og={`cook\`from:orders sel:cnt:*@total_orders,sum:total@revenue,avg:total@avg_order\`
// → SELECT COUNT(*) AS total_orders,
//          SUM(total) AS revenue,
//          AVG(total) AS avg_order
//   FROM orders`}
        genalpha={`cook\`main:orders slay:cnt:*@total_orders,sum:total@revenue,avg:total@avg_order\`
// → SELECT COUNT(*) AS total_orders,
//          SUM(total) AS revenue,
//          AVG(total) AS avg_order
//   FROM orders`}
        title="aliases.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">GROUP BY</h2>

      <CodeBlock
        og={`// Group by single column
cook\`from:orders sel:user_id,cnt:* grp:user_id\`
// → SELECT user_id, COUNT(*)
//   FROM orders
//   GROUP BY user_id

// Group by multiple columns
cook\`from:orders sel:user_id,status,cnt:* grp:user_id,status\`
// → SELECT user_id, status, COUNT(*)
//   FROM orders
//   GROUP BY user_id, status`}
        genalpha={`// Group by single column
cook\`main:orders slay:user_id,cnt:* squad:user_id\`
// → SELECT user_id, COUNT(*)
//   FROM orders
//   GROUP BY user_id

// Group by multiple columns
cook\`main:orders slay:user_id,status,cnt:* squad:user_id,status\`
// → SELECT user_id, status, COUNT(*)
//   FROM orders
//   GROUP BY user_id, status`}
        title="group-by.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">HAVING</h2>

      <p className="text-text-secondary mb-4">
        Filter grouped results (like WHERE but for aggregates):
      </p>

      <CodeBlock
        og={`// Users with more than 5 orders
cook\`from:orders sel:user_id,cnt:*@order_count grp:user_id hav:cnt:*>5\`
// → SELECT user_id, COUNT(*) AS order_count
//   FROM orders
//   GROUP BY user_id
//   HAVING COUNT(*) > 5

// High-value customers
cook\`from:orders sel:user_id,sum:total@total_spent grp:user_id hav:sum:total>1000\`
// → SELECT user_id, SUM(total) AS total_spent
//   FROM orders
//   GROUP BY user_id
//   HAVING SUM(total) > 1000`}
        genalpha={`// Users with more than 5 orders
cook\`main:orders slay:user_id,cnt:*@order_count squad:user_id tea:cnt:*>5\`
// → SELECT user_id, COUNT(*) AS order_count
//   FROM orders
//   GROUP BY user_id
//   HAVING COUNT(*) > 5

// High-value customers (spill the tea on big spenders)
cook\`main:orders slay:user_id,sum:total@total_spent squad:user_id tea:sum:total>1000\`
// → SELECT user_id, SUM(total) AS total_spent
//   FROM orders
//   GROUP BY user_id
//   HAVING SUM(total) > 1000`}
        title="having.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">COUNT DISTINCT</h2>

      <CodeBlock
        og={`// Count unique values
cook\`from:orders sel:cnt:user_id/distinct@unique_customers\`
// → SELECT COUNT(DISTINCT user_id) AS unique_customers FROM orders

// Per-group distinct count
cook\`from:orders sel:status,cnt:user_id/distinct grp:status\`
// → SELECT status, COUNT(DISTINCT user_id)
//   FROM orders
//   GROUP BY status`}
        genalpha={`// Count unique values
cook\`main:orders slay:cnt:user_id/distinct@unique_customers\`
// → SELECT COUNT(DISTINCT user_id) AS unique_customers FROM orders

// Per-group distinct count
cook\`main:orders slay:status,cnt:user_id/distinct squad:status\`
// → SELECT status, COUNT(DISTINCT user_id)
//   FROM orders
//   GROUP BY status`}
        title="count-distinct.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Combined Example</h2>

      <CodeBlock
        og={`// Sales report by category
cook\`from:products
    join:order_items on:products.id=order_items.product_id
    sel:products.category,cnt:*@items_sold,sum:order_items.quantity@total_qty,sum:order_items.price@revenue
    grp:products.category
    hav:sum:order_items.price>500
    ord:revenue/desc\`
// → SELECT products.category,
//          COUNT(*) AS items_sold,
//          SUM(order_items.quantity) AS total_qty,
//          SUM(order_items.price) AS revenue
//   FROM products
//   INNER JOIN order_items ON products.id = order_items.product_id
//   GROUP BY products.category
//   HAVING SUM(order_items.price) > 500
//   ORDER BY revenue DESC`}
        genalpha={`// Sales report by category
cook\`main:products
    link:order_items match:products.id=order_items.product_id
    slay:products.category,cnt:*@items_sold,sum:order_items.quantity@total_qty,sum:order_items.price@revenue
    squad:products.category
    tea:sum:order_items.price>500
    vibe:revenue/desc\`
// → SELECT products.category,
//          COUNT(*) AS items_sold,
//          SUM(order_items.quantity) AS total_qty,
//          SUM(order_items.price) AS revenue
//   FROM products
//   INNER JOIN order_items ON products.id = order_items.product_id
//   GROUP BY products.category
//   HAVING SUM(order_items.price) > 500
//   ORDER BY revenue DESC`}
        title="report.ts"
      />

      <div className="feature-card bg-neon-lime/5 border-neon-lime/20 mt-8">
        <h3 className="text-lg font-semibold mb-2 text-neon-lime">Pro Tip</h3>
        <p className="text-text-secondary text-sm">
          Use aliases for aggregate columns to make results more readable and easier to work with
          in your application code.
        </p>
      </div>
    </article>
  );
}
