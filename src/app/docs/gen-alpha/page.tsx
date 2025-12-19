export default function GenAlphaPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">💀</span>
        <h1 className="text-4xl font-bold text-text-primary m-0">Gen Alpha Mode</h1>
      </div>

      <p className="text-xl text-text-secondary mb-8">
        SQL that hits different. No cap, fr fr. Same output, more rizz.
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">What is Gen Alpha Mode?</h2>

      <p className="text-text-secondary mb-4">
        Gen Alpha mode is an alternative syntax that maps internet slang to SQL operations.
        It produces <strong>identical SQL output</strong> to OG syntax — it&apos;s purely a
        stylistic choice. Use it for fun, to confuse your coworkers, or to assert dominance
        in code reviews.
      </p>

      <div className="feature-card bg-neon-pink/5 border-neon-pink/20 mb-8">
        <p className="text-text-secondary text-sm m-0">
          <strong className="text-neon-pink">Pro tip:</strong> Both syntaxes can be mixed in the same codebase.
          Your Gen Alpha queries will compile to the exact same SQL as their OG equivalents.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Complete Slang Reference</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-elevated">
              <th className="text-left py-3 px-4 text-text-muted font-medium">Gen Alpha</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">OG</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">SQL</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">Vibe Explanation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-elevated">
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">main:</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">from:</code></td>
              <td className="py-3 px-4 text-text-secondary">FROM</td>
              <td className="py-3 px-4 text-text-muted text-xs">Main character table</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">slay:</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">sel:</code></td>
              <td className="py-3 px-4 text-text-secondary">SELECT</td>
              <td className="py-3 px-4 text-text-muted text-xs">Slay those columns</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">sus:</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">whr:</code></td>
              <td className="py-3 px-4 text-text-secondary">WHERE</td>
              <td className="py-3 px-4 text-text-muted text-xs">Filter the sus rows</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">vibe:</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">ord:</code></td>
              <td className="py-3 px-4 text-text-secondary">ORDER BY</td>
              <td className="py-3 px-4 text-text-muted text-xs">Vibe check the order</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">bet:</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">lim:</code></td>
              <td className="py-3 px-4 text-text-secondary">LIMIT</td>
              <td className="py-3 px-4 text-text-muted text-xs">Bet, only this many</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">skip:</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">off:</code></td>
              <td className="py-3 px-4 text-text-secondary">OFFSET</td>
              <td className="py-3 px-4 text-text-muted text-xs">Skip these</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">squad:</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">grp:</code></td>
              <td className="py-3 px-4 text-text-secondary">GROUP BY</td>
              <td className="py-3 px-4 text-text-muted text-xs">Squad up by column</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">tea:</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">hav:</code></td>
              <td className="py-3 px-4 text-text-secondary">HAVING</td>
              <td className="py-3 px-4 text-text-muted text-xs">Spill the tea</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">link:</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">join:</code></td>
              <td className="py-3 px-4 text-text-secondary">JOIN</td>
              <td className="py-3 px-4 text-text-muted text-xs">Link up tables</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">match:</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">on:</code></td>
              <td className="py-3 px-4 text-text-secondary">ON</td>
              <td className="py-3 px-4 text-text-muted text-xs">Match condition</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">nocap:</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">ins:</code></td>
              <td className="py-3 px-4 text-text-secondary">INSERT</td>
              <td className="py-3 px-4 text-text-muted text-xs">No cap, for real inserting</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">drip:</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">cols:</code></td>
              <td className="py-3 px-4 text-text-secondary">(columns)</td>
              <td className="py-3 px-4 text-text-muted text-xs">The drip (columns)</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">fire:</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">vals:</code></td>
              <td className="py-3 px-4 text-text-secondary">VALUES</td>
              <td className="py-3 px-4 text-text-muted text-xs">Fire values</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">glow:</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">upd:</code></td>
              <td className="py-3 px-4 text-text-secondary">UPDATE</td>
              <td className="py-3 px-4 text-text-muted text-xs">Glow up the data</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">rizz:</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">set:</code></td>
              <td className="py-3 px-4 text-text-secondary">SET</td>
              <td className="py-3 px-4 text-text-muted text-xs">Apply the rizz</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">yeet:</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">del:</code></td>
              <td className="py-3 px-4 text-text-secondary">DELETE</td>
              <td className="py-3 px-4 text-text-muted text-xs">Yeet into the void</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">flex:</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">ret:</code></td>
              <td className="py-3 px-4 text-text-secondary">RETURNING</td>
              <td className="py-3 px-4 text-text-muted text-xs">Flex what you got back</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">fam:</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">with:</code></td>
              <td className="py-3 px-4 text-text-secondary">(eager load)</td>
              <td className="py-3 px-4 text-text-muted text-xs">Bring the fam (relations)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Examples (bussin fr fr)</h2>

      <h3 className="text-lg font-semibold mb-3 text-neon-lime">SELECT with main character energy</h3>
      <div className="terminal mb-6">
        <div className="terminal-header">
          <div className="terminal-dot bg-[#ff5f57]" />
          <div className="terminal-dot bg-[#febc2e]" />
          <div className="terminal-dot bg-[#28c840]" />
        </div>
        <div className="terminal-body">
          <pre className="text-sm">
            <code>
              sqw<span className="code-string">`main:users slay:name,email sus:age&gt;21 vibe:created_at/desc bet:10`</span>{"\n\n"}
              <span className="code-comment">// → SELECT name, email FROM users WHERE age &gt; 21 ORDER BY created_at DESC LIMIT 10</span>
            </code>
          </pre>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-3 text-neon-pink">INSERT - no cap, dropping fire values</h3>
      <div className="terminal mb-6">
        <div className="terminal-header">
          <div className="terminal-dot bg-[#ff5f57]" />
          <div className="terminal-dot bg-[#febc2e]" />
          <div className="terminal-dot bg-[#28c840]" />
        </div>
        <div className="terminal-body">
          <pre className="text-sm">
            <code>
              sqw<span className="code-string">`nocap:users drip:name,email fire:john,john@test.com flex:id`</span>{"\n\n"}
              <span className="code-comment">// → INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id</span>
            </code>
          </pre>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-3 text-neon-cyan">UPDATE - glow up with that rizz</h3>
      <div className="terminal mb-6">
        <div className="terminal-header">
          <div className="terminal-dot bg-[#ff5f57]" />
          <div className="terminal-dot bg-[#febc2e]" />
          <div className="terminal-dot bg-[#28c840]" />
        </div>
        <div className="terminal-body">
          <pre className="text-sm">
            <code>
              sqw<span className="code-string">`glow:users rizz:status=active,verified=true sus:id=1 flex:*`</span>{"\n\n"}
              <span className="code-comment">// → UPDATE users SET status = $1, verified = $2 WHERE id = $3 RETURNING *</span>
            </code>
          </pre>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-3 text-neon-orange">DELETE - yeet into the void</h3>
      <div className="terminal mb-6">
        <div className="terminal-header">
          <div className="terminal-dot bg-[#ff5f57]" />
          <div className="terminal-dot bg-[#febc2e]" />
          <div className="terminal-dot bg-[#28c840]" />
        </div>
        <div className="terminal-body">
          <pre className="text-sm">
            <code>
              sqw<span className="code-string">`yeet:sessions sus:expired=true`</span>{"\n\n"}
              <span className="code-comment">// → DELETE FROM sessions WHERE expired = $1</span>
            </code>
          </pre>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-3 text-neon-purple">JOIN - link up</h3>
      <div className="terminal mb-6">
        <div className="terminal-header">
          <div className="terminal-dot bg-[#ff5f57]" />
          <div className="terminal-dot bg-[#febc2e]" />
          <div className="terminal-dot bg-[#28c840]" />
        </div>
        <div className="terminal-body">
          <pre className="text-sm">
            <code>
              sqw<span className="code-string">`main:users link:orders/left match:users.id=orders.user_id slay:users.name,orders.total`</span>{"\n\n"}
              <span className="code-comment">// → SELECT users.name, orders.total FROM users LEFT JOIN orders ON users.id = orders.user_id</span>
            </code>
          </pre>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Relation Aliases</h2>

      <p className="text-text-secondary mb-4">
        Even relations get the Gen Alpha treatment:
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-elevated">
              <th className="text-left py-3 px-4 text-text-muted font-medium">Gen Alpha</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">OG</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">Vibe</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-elevated">
            <tr>
              <td className="py-3 px-4"><code className="code-function">got()</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">hasOne()</code></td>
              <td className="py-3 px-4 text-text-muted text-xs">&quot;User got profile&quot;</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-function">stacked()</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">hasMany()</code></td>
              <td className="py-3 px-4 text-text-muted text-xs">&quot;User stacked posts&quot;</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-function">simps()</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">belongsTo()</code></td>
              <td className="py-3 px-4 text-text-muted text-xs">&quot;Post simps for user&quot;</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-function">linked()</code></td>
              <td className="py-3 px-4"><code className="text-text-muted">manyToMany()</code></td>
              <td className="py-3 px-4 text-text-muted text-xs">&quot;User linked with roles&quot;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="feature-card bg-neon-lime/5 border-neon-lime/20">
        <h3 className="text-lg font-semibold mb-2 text-neon-lime">When to Use Gen Alpha Mode</h3>
        <ul className="text-text-secondary text-sm space-y-2 list-disc list-inside m-0">
          <li>When you want to confuse the senior developers</li>
          <li>When your code review needs more chaos energy</li>
          <li>When you want to assert dominance</li>
          <li>When SQL is giving boomer vibes</li>
          <li>When you&apos;re chronically online and need to express it in code</li>
        </ul>
      </div>
    </article>
  );
}
