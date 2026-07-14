import { describe, expect, it } from 'vitest'
import { getMentionTagHtml } from './contentEditableMentions'
import { getSelectedTextMentionLabel } from './promptImageMentions'

describe('contentEditable mentions', () => {
  it('escapes mention text in tag HTML', () => {
    expect(getMentionTagHtml('@image<&">')).toBe(
      `<span contenteditable="false" class="mention-tag" data-mention-text="${getSelectedTextMentionLabel('@image&lt;&amp;&quot;&gt;')}">@image&lt;&amp;&quot;&gt;</span>`,
    )
  })
})
