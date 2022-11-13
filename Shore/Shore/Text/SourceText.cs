﻿using System.Collections.Immutable;

namespace Shore.Text
{
    public sealed class SourceText
    {
        private readonly string _text;
        public ImmutableArray<TextLine> Lines { get;  }

        private SourceText(string text)
        {
            _text = text;
            Lines = ParseLines(this, text);
        }

        public char this[int index] => _text[index];

        public int Length => _text.Length;

        public int GetLineIndex(int position)
        {
            var lower = 0;
            var upper = Lines.Length - 1;

            while (lower <= upper)
            {
                var index = lower + (upper - lower) / 2;
                var start = Lines[index].Start;

                if (position == start) return index;

                if (start > position) upper = index - 1;
                else lower = index + 1;
            }

            return lower - 1;
        }

        private static ImmutableArray<TextLine> ParseLines(SourceText sourceText, string text)
        {
            var result = ImmutableArray.CreateBuilder<TextLine>();
            var position = 0;
            var lineStart = 0;

            while (position < text.Length)
            {
                var lineBreakWidth = GetLineBreakWidth(text, position);

                if (lineBreakWidth == 0) position++;
                else
                {
                    AddLine(result, sourceText, position, lineStart, lineBreakWidth);
                    position += lineBreakWidth;
                    lineStart = position;
                }
            }

            if (position > lineStart) AddLine(result, sourceText, position, lineStart, 0);

            return result.ToImmutable();
        }

        private static void AddLine(ImmutableArray<TextLine>.Builder result, SourceText sourceText, int position,
            int lineStart, int lineBreakWidth)
        {
            var lineLength = position - lineStart;
            var lineLengthIncludingBreak = lineLength + lineBreakWidth;
            var line = new TextLine(sourceText, lineStart, lineLength, lineLengthIncludingBreak);
            result.Add(line);
        }

        private static int GetLineBreakWidth(string text, int position)
        {
            var current = text[position];
            var line = position + 1 >= text.Length ? '\0' : text[position + 1];

            switch (current)
            {
                case '\r' when line == '\n':
                    return 2;
                case '\r':
                case '\n':
                    return 1;
                default:
                    return 0;
            }
        }

        public static SourceText From(string text) => new SourceText(text);
        public override string ToString() => _text;
        public string ToString(int start, int length) => _text.Substring(start, length);
        public string ToString(TextSpan span) => ToString(span.Start, span.Length);
    }
}